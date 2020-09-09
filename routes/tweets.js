const express = require('express')
const router = express.Router()
const Twit = require('twit')

var T = new Twit({
  consumer_key:         process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

router.get('/', async(req, res) => {
    T.get('statuses/user_timeline', {q:'COVID-19', screen_name: 'CNN', in_reply_to_status_id: null, exclude_replies:true, include_rts:false, count: 10 }, function(err, data, response) {
    console.log(data)
  })

  res.send('Tweet Success')
})

module.exports = router
