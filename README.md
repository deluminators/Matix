<h1 align = "center" >Matix </h1>
<p align="center">
<img height=50% width=50% src=https://github.com/kahanikaar/kahanikaar.github.io/blob/master/images/matix1.png />
</p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Contributors](https://img.shields.io/github/contributors/deluminators/matix)](https://img.shields.io/github/contributors/deluminators/Matix)
[![Top Language](https://img.shields.io/github/languages/top/deluminators/matix)](https://github.com/deluminators/Matix) 
[![CodeFactor](https://www.codefactor.io/repository/github/deluminators/matix/badge)](https://www.codefactor.io/repository/github/deluminators/matix)
![Dependencies](https://img.shields.io/depfu/deluminators/Matix)
![Repository Size](https://img.shields.io/github/repo-size/deluminators/matix)
</br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
![Image Size](https://img.shields.io/docker/image-size/deluminators/matix)
![PR](https://img.shields.io/github/issues-pr-closed/deluminators/matix)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/deluminators/matix) 
 [![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://forthebadge.com)

<h5 align="center">Optimal Usage of manufacturing lines based on sales orders, backlogs and demand forecast minimizing cost and chances of delay thus producing working factory layout.
</h5>

-----
### Project Overview  
1. Matix is a Manufacturing Optimization Engine, works in optimizing the manufacturing process in factories to plan the optimal usage of production-lines operating in a factory. 
2. Factories run manufacturing units where production-lines are arranged where the product is moved sequentially along the line stopping at work-centers where an operation is performed. Factories face difficulty in managing production for minimizing delay and on-time shipment thus reducing backlogs. 
3. The project finds solution for optimal usage of manufacturing lines considering Current Orders, Backlogs and Forecasted orders thus minimizing wastage,cost, delay and maximizing factory output. 
4. The engine is fed with data about current pending orders, backlogged orders (orders not completed in scheduled time), and orders predicted to place in the next 7 days, and thus it provides a plan of operating the manufacturing production lines in the most optimal way. 
5. The project features the frontend for order creation, updation, listing details about items the factory manufacture, and the weekly plan for optimal usage of production lines, and the backend interacting via APIs while running the machine-learning models for forecasting demand (based on Time-series analysis on various features and parameters) and making recursive feedback and interaction with the modified optimizing algorithms in developing the plan.

----


### Instructions to run
1. Clone the repository  
2. Launch the terminal or powershell or command prompt and enter the following command
   ```
    cd Matix/"Application Code"/Myproject
    pip install -r requirements.txt 
    python manage.py runserver
   ```
3. This will start the backend server running in the Django framework in default port 8000. To run the server in different port, execute the following command
   ```
   python manage.py runserver 8671
   ```
4. For starting the frontend framework running in ReactJS, enter the following command after moving to the base directory
   ```
   cd Matix/"Application Code"/Myproject/frontend
   npm install
   npm start
   ```
   This will start the ReactJS framework for frontend in port 3000  
5. Launch any web browser and enter address [http://localhost:3000](http://localhost:3000) to access the  web application. Change in the running port will be prompted depending on occupancy.



-----

### Project Structure  
* User interface presenting current manufacturing layout  

<p align="center">
<img src="https://raw.githubusercontent.com/kahanikaar/kahanikaar.github.io/master/images/index3.png" height=70% width=70%  />  
   </p> 
   
   
* User interface presenting current manufacturing layout  
* Optimal usage of manufacturing lines prioritizing current orders, backlogs, demand forecast   
* Forecasting demand based on previous data and dynamic factors  
* Featuring factory layout providing functionality for complete order flow    

-----

### Technical Description
#### Web Application Development
ReactJS, Django Framework  
#### Database Management System
sqllite3
#### Machine Learning & Data Analysis
Numpy,  Pandas,  LightGBM,  NLTK,  Scikit-Learn,  Tensorflow,  keras
#### APIs Used
Twitter Streaming API

----
### Application Code Description
Description and technical information about all application codes can be found  [here](https://github.com/deluminators/Matix/blob/main/Application%20Code/Readme.md).


----
### Future Scope
1. **[UNDER RESEARCH]** Implementing the Reinforcement Learning based Q-lesrning approach along with inferences to Bat Algorithm for the optimization process in providing better feedback on the optimal usage.  
2. Changes in optimization algorithm for better hamdling production line failures thus to generate new plan based on the ready queue of items yet to manufacture and production lines still working.  
3. Development of mobile application support for easy access of plan data to whomsoever meeded.  
4. A Buffer inventory management system for better planning for future orders and Notification feature for changing lines. 
5. **[IMPLEMENTATION DEPENDENT]** Integration with manufacturing factory thus to use external factors in optimal planning.

---------

### Contributions  
For existing bugs and adding more features open a issue [here](https://github.com/deluminators/Matix/issues)

----------
### Developers
<table>
		<tr>
			<td align="center"><img src="https://avatars.githubusercontent.com/u/40017007?v=4"  width=100px;"><br /><b>Sanjiban Sengupta</b><br/><a href="https://github.com/kahanikaar"> <sub>@kahanikaar</sub> </a><br/><sub>Machine Learning, Optimization Research, Backend Development, Dockerization</sub></td>
		   <td align="center"><img src="https://avatars.githubusercontent.com/u/50028306?v=4"  width=100px;"><br /><b>Ananya Aprameya</b><br/><a href="https://github.com/Aprameya20"><sub>@Aprameya20</sub></a><br/><sub>Backend Development, Model Integration, Database modelling, Project Design</sub></td> 
			<td align="center"><img src="https://avatars.githubusercontent.com/u/46246685?v=4"  width=100px;"><br /><b>Sarthak Bramha</b><br/><a href="https://github.com/sarthak-2001"><sub>@sarthak-2001</sub></a><br/><sub>Frontend Development, Optimization Research, Logic Development, API Design</sub></td>			
		</tr>
		
</table>

 ----
