const request = require('superagent')

const zenQuote = async () => {
    try {
      const response = await request
        .get(`https://zenquotes.io/api/random`)
      
      return `${response.body[0].q} by ${response.body[0].a}`
  
    } catch(e) {
      console.log(e)    
    }
  }
  
  module.exports = { zenQuote }

