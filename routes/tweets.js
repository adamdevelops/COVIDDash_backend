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
  const tweets = {data: []};

  const t1 = await T.get('search/tweets', {q:'Covid-19 AND -filter:retweets AND -filter:replies', from: 'CNN', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      tweets.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });

  const t2 = await T.get('search/tweets', {q:'Covid AND -filter:retweets AND -filter:replies', from: 'DrTomFrieden', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      tweets.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });

  const t3 = await T.get('search/tweets', {q:'COVID-19 AND -filter:retweets AND -filter:replies', from: 'phenomstruck', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      tweets.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });

  const t4 = await T.get('search/tweets', {q:'COVID AND -filter:retweets AND -filter:replies', from: 'AmeshAA', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      tweets.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });

  const t5 = await T.get('search/tweets', {q:'Covid-19 AND -filter:retweets AND -filter:replies', from: 'QuickTake', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      tweets.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });



  console.log('final tweet array')
  console.log(tweets.data);

  res.send(tweets.data)
})

module.exports = router
