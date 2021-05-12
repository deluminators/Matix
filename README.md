<h1 align = "center" >Matix </h1>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Contributors](https://img.shields.io/github/contributors/deluminators/matix)](https://img.shields.io/github/contributors/deluminators/Matix)
[![Top Language](https://img.shields.io/github/languages/top/deluminators/matix)](https://github.com/deluminators/Matix) 
![Repository Size](https://img.shields.io/github/repo-size/deluminators/matix)
![Image Size](https://img.shields.io/docker/image-size/deluminators/matix)
![Dependencies](https://img.shields.io/depfu/deluminators/Matix)
[![CodeFactor](https://www.codefactor.io/repository/github/deluminators/matix/badge)](https://www.codefactor.io/repository/github/deluminators/matix)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<h5 align="center">Optimal Usage of manufacturing lines based on sales orders, backlogs and demand forecast minimizing cost and chances of delay thus producing working factory layout.
</h5>

-----
### Project Overview  
Matix is a Manufacturing Optimization Engine, works in optimizing the manufacturing process in factories to plan the optimal usage of production-lines operating in a factory. Factories run manufacturing units where production-lines are arranged where the product is moved sequentially along the line stopping at work-centers where an operation is performed. Factories face difficulty in managing production for minimizing delay and on-time shipment thus reducing backlogs. The project finds solution for optimal usage of manufacturing lines considering Current Orders, Backlogs and Forecasted orders thus minimizing wastage,cost, delay and maximizing factory output. The engine is fed with data about current pending orders, backlogged orders (orders not completed in scheduled time), and orders predicted to place in the next 7 days, and thus it provides a plan of operating the manufacturing production lines in the most optimal way. The project features the frontend for order creation, updation, listing details about items the factory manufacture, and the weekly plan for optimal usage of production lines, and the backend interacting via APIs while running the machine-learning models for forecasting demand (based on Time-series analysis on various features and parameters) and making recursive feedback and interaction with the modified optimizing algorithms in developing the plan.

----
### Technical Description
###### Web Application Development
ReactJS, Django Framework  
###### Database Management System
sqllite3
###### Machine Learning & Data Analysis
Numpy,  Pandas,  LightGBM,  NLTK,  Scikit-Learn,  Tensorflow,  keras
###### APIs Used
Twitter Streaming API

-----
### Instructions to run
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

----
### Application Code Description
Description and technical information about all application codes can be found  [here](https://github.com/deluminators/Matix/blob/main/Application%20Code/Readme.md).


----
### Future Scope
1- **[UNDER RESEARCH]** Implementing the Reinforcement Learning based Q-lesrning approach along with inferences to Bat Algorithm for the optimization process in providing better feedback on the optimal usage.  
2- Changes in optimization algorithm for better hamdling production line failures thus to generate new plan based on the ready queue of items yet to manufacture and production lines still working.  
3- Development of mobile application support for easy access of plan data to whomsoever meeded.  
4- A Buffer inventory management system for better planning for future orders.  
5- **[IMPLEMENTATION DEPENDENT]** Integration with manufacturing factory thus to use external factors in optimal planning.

---------

### Contributions  
For existing bugs and adding more features open a issue [here](https://github.com/deluminators/Matix/issues)

----------
### Developers
| Team Member | Handles | Role |
| --- | --- | --- |
| Sanjiban Sengupta | [@kahanikaar](https://github.com/kahanikaar)| Machine Learning, Optimization Research, Backend Development, Dockerization |
| Ananya Aprameya | [@Aprameya20](https://github.com/Aprameya20)|Backend Development, Model Integration, Database modelling, Project Design|
| Sarthak Bramha | [@sarthak-2001](https://github.com/sarthak-2001)|Frontend Development, Optimization Research, Logic Development, API Design|

