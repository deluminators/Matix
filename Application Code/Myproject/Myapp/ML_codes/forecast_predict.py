#Function for scaling value in definitive range.
def scaleValues(data):
    if data>25:
        data-=(int(data/25)*25)
    if data<10:
        data+=15    
    return data


#Callable function with date as argument for predicting demand for next 7 days from given date.
def predict(initDate="today"):
    import pandas as pd
    import numpy as np
    from datetime import datetime
    import lightgbm as lgb
    from sklearn.model_selection import train_test_split
    from datetime import date
    from datetime import timedelta
    from collections import defaultdict

    #Making the prediction dataframe
    if(initDate=="today" or initDate==str(date.today())):
        initDate=str(date.today())
        initDate=(datetime.strptime(initDate, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')
        rows=[]
        item=1
        currDate=initDate
        finalDate=(datetime.strptime(initDate, '%Y-%m-%d') + timedelta(days=6)).strftime('%Y-%m-%d')
        for i in range(70):
            rows.append([i,currDate,item])
            if(currDate==finalDate):
                currDate=initDate
                item=item+1
            else:
                currDate=(datetime.strptime(currDate, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')

    else:
        rows=[]
        item=1
        currDate=initDate
        finalDate=(datetime.strptime(initDate, '%Y-%m-%d') + timedelta(days=6)).strftime('%Y-%m-%d')
        for i in range(70):
            rows.append([i,currDate,item])
            if(currDate==finalDate):
                currDate=initDate
                item=item+1
            else:
                currDate=(datetime.strptime(currDate, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')




    df=pd.DataFrame(rows,columns=["id","date","item"])

    #Prediction using the saved LightGBM model for Time series prediction
    pred_model=lgb.Booster(model_file='Myapp/ML_codes/model.txt')
    df['date'] = pd.to_datetime(df['date'])
    df['month'] = df['date'].dt.month
    df['day'] = df['date'].dt.dayofweek
    df['year'] = df['date'].dt.year
    y_test = pred_model.predict(df[['item','month','day','year']])
    df['demand']=y_test.tolist()
    finalResult=list()
    for ind in df.index:
        temp={}
        temp['date']=str(df['date'][ind].strftime("%Y-%m-%d"))
        temp['item']=str(df['item'][ind])
        temp['demand']= str(scaleValues(int(df['demand'][ind])))
        finalResult.append(temp)
    return finalResult    


#Prediction of demand with argument date inclusive
def predictToday(initDate="today"):
    import pandas as pd
    import numpy as np
    from datetime import datetime
    import lightgbm as lgb
    from sklearn.model_selection import train_test_split
    from datetime import date
    from datetime import timedelta
    from collections import defaultdict

    if(initDate=="today" or initDate==str(date.today())):
        initDate=str(date.today())
        rows=[]
        item=1
        currDate=initDate
        finalDate=initDate
        for i in range(10):
            rows.append([i,currDate,item])
            if(currDate==finalDate):
                currDate=initDate
                item=item+1
            else:
                currDate=(datetime.strptime(currDate, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')

    else:
        rows=[]
        item=1
        currDate=initDate
        finalDate=initDate
        for i in range(10):
            rows.append([i,currDate,item])
            if(currDate==finalDate):
                currDate=initDate
                item=item+1
            else:
                currDate=(datetime.strptime(currDate, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')




    df=pd.DataFrame(rows,columns=["id","date","item"])

    pred_model=lgb.Booster(model_file='Myapp/ML_codes/model.txt')
    df['date'] = pd.to_datetime(df['date'])
    df['month'] = df['date'].dt.month
    df['day'] = df['date'].dt.dayofweek
    df['year'] = df['date'].dt.year
    y_test = pred_model.predict(df[['item','month','day','year']])
    df['demand']=y_test.tolist()

    finalResult=list()
    for ind in df.index:
        temp={}
        temp['date']=str(df['date'][ind].strftime("%Y-%m-%d"))
        temp['item']=str(df['item'][ind])
        temp['demand']= str(scaleValues(int(df['demand'][ind])))
        finalResult.append(temp)
    return finalResult    



