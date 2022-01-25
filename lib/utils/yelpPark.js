const request = require('superagent')
const { getRandomPark } = require('../utils/getRandomPark')

const yelpPark = async (zip) => {
    try {
      const response = await request
        .get(`https://api.yelp.com/v3/businesses/search?location=${zip}&categories=parks`)
        .set('Authorization', `Bearer ${process.env.YELP_KEY}`)
      
      const park = getRandomPark(response.body.businesses)
      return park
  
    } catch(e) {
      console.log(e)    
    }
  }
  
  module.exports = { yelpPark }