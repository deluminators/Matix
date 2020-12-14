#Callable function TimeSeriesForecastTrain() for training the machine learning model implemented on LightGBM model for Time Series based analysis.

def TimeSeriesForecastTrain():
    import os
    import gc
    import time
    
    import pandas as pd
    import numpy as np
    from datetime import datetime
    import lightgbm as lgb
    from sklearn.model_selection import train_test_split
    from datetime import date

    train_df=pd.read_csv("Myapp/ML_codes/forecast_train.csv")

    train_df['date'] = pd.to_datetime(train_df['date'])
    
    #Splits training dataset for time series analysis based on multiple tested parameters for LightGBM model.

    train_df['month'] = train_df['date'].dt.month
    train_df['day'] = train_df['date'].dt.dayofweek
    train_df['year'] = train_df['date'].dt.year
    y = 'sales'
    train_x, test_x, train_y, test_y = train_test_split(train_df[['item','month','day','year']],train_df[y], test_size=0.2, random_state=2018)

    params = {
        'nthread': 10,
         'max_depth': 5,
#         'max_depth': 9,
        'task': 'train',
        'boosting_type': 'gbdt',
        'objective': 'regression_l1',
        'metric': 'mape', # this is abs(a-e)/max(1,a)
#         'num_leaves': 39,
        'num_leaves': 64,
        'learning_rate': 0.2,
       'feature_fraction': 0.9,
#         'feature_fraction': 0.8108472661400657,
#         'bagging_fraction': 0.9837558288375402,
       'bagging_fraction': 0.8,
        'bagging_freq': 5,
        'lambda_l1': 3.097758978478437,
        'lambda_l2': 2.9482537987198496,
#       'lambda_l1': 0.06,
#       'lambda_l2': 0.1,
        'verbose': 1,
        'min_child_weight': 6.996211413900573,
        'min_split_gain': 0.037310344962162616,
        }

    lgb_train = lgb.Dataset(train_x,train_y)
    lgb_valid = lgb.Dataset(test_x,test_y)
    model = lgb.train(params, lgb_train, 3000, valid_sets=[lgb_train, lgb_valid],early_stopping_rounds=50, verbose_eval=50)
    model.save_model("Myapp/ML_codes/model.txt")
   
