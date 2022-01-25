const Profile = require('../models/Profile')
const { sesEmail } = require('../utils/sesEmail')
const { yelpPark } = require('../utils/yelpPark')
const { zenQuote } = require('../utils/zenQuote')

module.exports = class FullService {
    static async makeMessage(email, zipcode) {

        const park = await yelpPark(zipcode)
        const quote = await zenQuote()
        const messageContent = `Here is your quote for today: ${quote}. Consider contemplating that while exploring this nearby park: ${park}`

        await sesEmail(email, messageContent)

        const userExists = await Profile.getByEmail(email);
    
        if (userExists) {
          return await Profile.updateProfile(park.name, quote, zipcode, email);
        } else {
          return await Profile.insertUser(park.name, quote, email, zipcode);
        }
      

    }
}