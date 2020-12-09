def append_csv(data):
	import numpy as np 
	import pandas as pd 

	df= pd.read_csv("Myapp/ML_codes/forecast_train.csv")
	#df.drop('Unnamed: 0', axis=1, inplace=True)
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop1']), "sales"] +=data['Quantity1']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop2']), "sales"] +=data['Quantity2']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop3']), "sales"] +=data['Quantity3']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop4']), "sales"] +=data['Quantity4']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop5']), "sales"] +=data['Quantity5']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop6']), "sales"] +=data['Quantity6']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop7']), "sales"] +=data['Quantity7']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop8']), "sales"] +=data['Quantity8']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop9']), "sales"] +=data['Quantity9']
	df.loc[(df.date == data['orderDate']) & (df.item==data['Laptop10']), "sales"] +=data['Quantity10']
	df.to_csv('Myapp/ML_codes/forecast_train.csv',index=False) 








