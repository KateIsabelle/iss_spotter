const request = require('request');

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);

    }
    const IP = JSON.parse(body).ip;
    callback(null, IP);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const coords = {
      latitude: data.latitude,
      longitude: data.longitude
    };
    callback(null, coords);
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS FlyOver Times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const flyovers = JSON.parse(body).response;
    callback(null, flyovers);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      callback(error, null);
      //console.log("It didn't work!", error);
      return;
    }
    fetchCoordsByIP(ip, (err, coordinates) => {
      if (err) {
        callback(error, null);
        //console.log("It didn't work!", err.message);
        return;
      }
      fetchISSFlyOverTimes(coordinates, (err, flyovers) => {
        if (err) {
          callback(error, null);
          //console.log("It didn't work!", err.message);
          return;
        }
        callback(null, flyovers);
        //console.log("It worked! Returned Coordinates:", flyovers);
      });
    });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};