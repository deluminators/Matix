# Matix
Matix- Manufacturing Optimization Engine. Optimal Usage of manufacturing lines based on sales orders, backlogs and demand forecast minimizing cost and chances of delay thus producing working factory layout.


### Project Overview
----------------------------------


Matix is a Manufacturing Optimization Engine, works in optimizing the manufacturing process in factories to plan the optimal usage of production-lines operating in a factory. Factories run manufacturing units where production-lines are arranged where the product is moved sequentially along the line stopping at work-centers where an operation is performed. Factories face difficulty in managing production for minimizing delay and on-time shipment thus reducing backlogs. The project finds solution for optimal usage of manufacturing lines considering Current Orders, Backlogs and Forecasted orders thus minimizing wastage,cost, delay and maximizing factory output. The engine is fed with data about current pending orders, backlogged orders (orders not completed in scheduled time), and orders predicted to place in the next 7 days, and thus it provides a plan of operating the manufacturing production lines in the most optimal way. The project features the frontend for order creation, updation, listing details about items the factory manufacture, and the weekly plan for optimal usage of production lines, and the backend interacting via APIs while running the machine-learning models for forecasting demand (based on Time-series analysis on various features and parameters) and making recursive feedback and interaction with the modified optimizing algorithms in developing the plan.

#### Technical Description
###### Web Application Development
ReactJS, Django Framework  
###### Database Management System
sqllite3
###### Machine Learning & Data Analysis
Numpy,  Pandas,  LightGBM,  NLTK,  Scikit-Learn,  Tensorflow,  keras
###### APIs Used
Twitter Streaming API

#### Instructions to run
1- Clone the repository  
2- Launch the terminal or powershell or command prompt and enter the following command
   ```
   cd Matix/Application Code/Myproject

    pip install -r requirements.txt 
    python manage.py runserver
   ```
3- This will start the backend server running in the Django framework in default port 8000. To run the server in different port, execute the following command
   ```
   python manage.py runserver 8671
   ```
4- For starting the frontend framework running in ReactJS, enter the following command
```
cd Matix/Application Code/Myproject/frontend
npm install
npm start
```
   This will start the ReactJS framework for frontend in port 3000  
5- Launch any web browser and enter address [http://localhost:3000](http://localhost:3000) to access the  web application

### Team Members
----------------------------------
Sanjiban Sengupta,<b518041@iiit-bh.ac.in>  
Ananya Aprameya,<b318004@iiit-bh.ac.in>  
Sarthak Bramha,<b418045@iiit-bh.ac.in>  
Sarthak Das,<b518042@iiit-bh.ac.in>  

