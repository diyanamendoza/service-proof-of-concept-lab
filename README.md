# Parks Thought Backend

The services & utils for Park Thoughts. Sends a random quote and a park upon posting email and zipcode to '/api/v1/parkthoughts/'.

## Yelp API

We fetched local parks based on the users zipcode.
Endpoint:`https://api.yelp.com/v3/businesses/search`

Is it well-documented? Takes some trial and error. You have to figure out how to set the authorization header because that is not clearly documented.
https://www.yelp.com/developers/documentation/v3/get_started
Is it well-supported? Yes.
Is it widely used? Yes.
Is it intuitive to use? No.
What is the most interesting/exciting thing you discovered about the service? Once you figure out the filtering syntax and authorization header it is easy to grab what you want.
What could be improved? The documentation.

## ZenQuotes API

We fetched a random quote from this endpoint: `https://zenquotes.io/api/random`

Is it well-documented? Yes
Is it well-supported? https://premium.zenquotes.io/zenquotes-documentation/
Documentation seems current.
Is it widely used? Doesn't seem like it.  
Is it intuitive to use? Yes.
What is the most interesting/exciting thing you discovered about the service? It's quick to use.
What could be improved? N/A

## Amazon SES

We used this to auto send email to the user with their park and thought of the day recommendation.

Is it well-documented? Yes, but it is difficult to find what you need. It is easier to rely on other developers' blog posts and videos.
https://aws.amazon.com/ses/
https://medium.com/@maciej.lisowski.elk/nodejs-and-amazon-ses-how-to-send-emails-from-your-application-5c24b1f9b67b
Is it well-supported? Yes.
Is it widely used? Yes.
What is the most interesting/exciting thing you discovered about the service? How widely used it is, which means there are a lot of places to look for help besides the Amazon documentation.
What could be improved? Documentation organization.
