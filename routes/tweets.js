const express = require('express')
const router = express.Router()
const Twit = require('twit')

const T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

router.get('/', async(req, res) => {
    var tweets = T.get('search/tweets', {q:'Covid-19 AND -filter:retweets AND -filter:replies', from: 'CNN', in_reply_to_status_id: null, count: 5 }, function(err, data, response) {
    console.log(data.statuses)
  })

  res.send('Tweet Success')
})

module.exports = router
