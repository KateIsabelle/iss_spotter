const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
