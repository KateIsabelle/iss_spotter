const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds.`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (err, flyovers) => {
//   if (err) {
//     console.log("It didn't work!", err.message);
//     return;
//   }
//   console.log("It worked! Returned Coordinates:", flyovers);
// });


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("162.222.82.242", (err, coordinates) => {
//   if (err) {
//     console.log("It didn't work!", err.message);
//     return;
//   }
//   console.log("It worked! Returned Coordinates:", coordinates);
// });
