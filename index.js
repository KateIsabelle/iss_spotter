const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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
