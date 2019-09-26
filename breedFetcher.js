const request = require('request');
//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`
const breed = process.argv[2];

const fetchBreedDesc = function(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    let breedInfo = data[0];
    if (breedInfo === null) {
      console.log('error');
    }
    if (error) {
      console.log('error');
    }
          
    if (data) {
      console.log(breedInfo.description);
    } else {
      console.log("error: breed not found");
    }
  });
};


fetchBreedDesc(breed);
//const data = JSON.parse(body);
//console.log(data);
//console.log(typeof data);

