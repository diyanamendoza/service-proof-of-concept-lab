require('dotenv').config();
const AWS = require('aws-sdk');

const sesEmail = (email, content) => {
    const SESConfig = {
      apiVersion: '2010-12-01',
      accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
      region: process.env.AWS_SES_REGION
    };
  
    const params = {
      Source: 'diyana.amp@gmail.com',
      Destination: {
        ToAddresses: ['diyana.amp@pm.me', 'stef45689@gmail.com'],
      },
      ReplyToAddresses: ['diyana.amp@gmail.com', 'stef45689@gmail.com'],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: content
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Your quote of the day and where to ponder it'
        }
      }
    };
  
    new AWS.SES(SESConfig).sendEmail(params)
      .promise()
      .then((res) => {
        console.log(`Sent ${content} to ${email}. Yay! AWS response: ${res}`);
      });
  };
    
  module.exports = { sesEmail };