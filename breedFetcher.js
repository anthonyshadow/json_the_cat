const request = require('request');
//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`


const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    let breedInfo = data[0];
    if (breedInfo === null) {
      console.log('error');
    }
    if (error) {
      callback('error', null);
    }
          
    if (data) {
      callback(null, breedInfo.description);
    } else {
      callback("error: breed not found", null);
    }
  });
};


//const data = JSON.parse(body);
//console.log(data);
//console.log(typeof data);


//fetchBreedDescription('Siberian', (error, description) {

//});

module.exports = { fetchBreedDescription };