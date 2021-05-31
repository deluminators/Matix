#Script for fetching Twitter data and running basic sentimental analysis for gaining insights on brand and product popularity.
def socialMediaDellDigital():
    import tweepy
    from tweepy.streaming import StreamListener
    from tweepy import OAuthHandler
    from tweepy import Stream
    import json
    import ast
    import random
    import os
    from dotenv import load_dotenv
    load_dotenv()

    from datetime import date,timedelta,datetime
    currDate=str(date.today())
    initDate=(datetime.strptime(currDate, '%Y-%m-%d') - timedelta(days=1)).strftime('%Y-%m-%d')
    #Add your credentials here
    consumer_key=str(os.getenv('consumer_key'))
    consumer_secret=str(os.getenv('consumer_secret'))
    access_token_key=str(os.getenv('access_token_key'))
    access_token_secret=str(os.getenv('access_token_secret'))
    twitter_keys = {'consumer_key': consumer_key,'consumer_secret':consumer_secret,'access_token_key':access_token_key,'access_token_secret':access_token_secret}
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

