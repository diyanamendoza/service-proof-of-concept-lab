const getRandomPark = (responseBody) => {
    const parksArray = responseBody.map(entry => ({ name: entry.name, url: entry.url }));
    return parksArray[Math.floor(Math.random() * parksArray.length)];
  }

module.exports = { getRandomPark }