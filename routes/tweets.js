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
  const t1 = {data: []};

  const tweets = await T.get('search/tweets', {q:'Covid-19 AND -filter:retweets AND -filter:replies', from: 'CNN', in_reply_to_status_id: null, count: 1 })
  .then(async (response) =>{
      items = response.data
      console.log('items')
      console.log(items.statuses)

      t1.data.push(items.statuses[0]);

      return items;
  })
  .catch(err =>{
      console.log(err)
  });
  // console.log('Tweets')
  // console.log(tweets)
  //
  const temp = {
    created_at: 'Wed Sep 30 16:16:48 +0000 2020',
    id: 1311339221924356000,
    id_str: '1311339221924356096',
    text: "The NFL says Sunday's game between the Pittsburgh Steelers and the Tennessee Titans has been postponed after the Ti… https://t.co/HBd2Nvty9j",
    truncated: true,
    entities: { hashtags: [], symbols: [], user_mentions: [], urls: [Array] },
    metadata: { iso_language_code: 'en', result_type: 'recent' },
    source: '<a href="http://www.socialflow.com" rel="nofollow">SocialFlow</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 759251,
      id_str: '759251',
      name: 'CNN',
      screen_name: 'CNN',
      location: '',
      description: 'It’s our job to #GoThere & tell the most difficult stories. Join us! For more breaking news updates follow @CNNBRK & download our app https://t.co/UCHG9M367J',
      url: 'http://t.co/IaghNW8Xm2',
      entities: [Object],
      protected: false,
      followers_count: 49902953,
      friends_count: 1106,
      listed_count: 141550,
      created_at: 'Fri Feb 09 00:35:02 +0000 2007',
      favourites_count: 1421,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: true,
      statuses_count: 319394,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: true,
      profile_background_color: '323232',
      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url: 'http://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_normal.jpg',
      profile_image_url_https: 'https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_normal.jpg',
      profile_banner_url: 'https://pbs.twimg.com/profile_banners/759251/1600794333',
      profile_link_color: '004287',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: 'EEEEEE',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: false,
      follow_request_sent: false,
      notifications: false,
      translator_type: 'regular'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 76,
    favorite_count: 183,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  }

  t1.data.push(temp);

  console.log('t1')
  console.log(t1.data);

  res.send(t1.data)
})

module.exports = router
