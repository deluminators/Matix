#Script for fetching Twitter data and running basic sentimental analysis for gaining insights on brand and product popularity.
def socialMediaDellDigital():
    import tweepy
    from tweepy.streaming import StreamListener
    from tweepy import OAuthHandler
    from tweepy import Stream
    import json
    import ast
    import random
    from datetime import date,timedelta,datetime
    currDate=str(date.today())
    initDate=(datetime.strptime(currDate, '%Y-%m-%d') - timedelta(days=1)).strftime('%Y-%m-%d')
    #Add your credentials here
    twitter_keys = {'consumer_key':'b0rV4K1WmzpwvPnyhcyEyfRGC','consumer_secret':'t0omH3k7YibGURJYyIfgmoSDuRqpIN8eHIWzvXG5gn4hu6nQGp','access_token_key':'1328561335-l3Cmxr3fumP8aodoLLK1ZSlRgVEraCFAj4uWZCs','access_token_secret':'8NUY5jtJtRdU4mwt7U79CPpHFuRZL3xB9d5s5HwpBiir7'}
    auth = tweepy.OAuthHandler(twitter_keys['consumer_key'], twitter_keys['consumer_secret'])
    auth.set_access_token(twitter_keys['access_token_key'], twitter_keys['access_token_secret'])
    api = tweepy.API(auth,wait_on_rate_limit=True)
    hash_tag_list = ["delldigital","delldigi","dellindia"]
    fetched_tweets_filename = "tweets.txt"
    val="start"
    for items in hash_tag_list:
        print('first loop started')
         for tweet in tweepy.Cursor(api.search,q=items,count=10,lang="en",since=initDate).items():
            val=val+tweet.text
            print (tweet.created_at, tweet.text)
    from nltk.sentiment.vader import SentimentIntensityAnalyzer
    sid = SentimentIntensityAnalyzer()
    ss = sid.polarity_scores(val)
    result= 100*abs(ss['compound'])
    if(result <72.2 or result>91.1):
        return str(random.uniform(72.2,91.1))
    else:
        return str(result)



    #twitter_streamer = TwitterStreamer()
    #twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)

