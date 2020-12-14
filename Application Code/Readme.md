Contains all the application files for the project for both frontend and backend with Machine Learning integration.
  
  ## Application Code Description
#### Frameworks used for Web Development
###### ReactJS

###### Django Framework
Using Django Framework for backend development we have used Restfull APIs for dynamic data exchange between the frontend and the Backend of the Project.The Data is fetched/transmitted from the API points and the backend functions of views.py help us in redirection and rendering of WebPages, Giving function calls, initiating ML codes and storing data into the DBSQLITE3 server.

#### Frameworks used for Machine Learning
LightGBM    
ScikitLearn  
NLTK  
Tensorflow  

#### Frameworks used for Web Harvesting
Requests  
BeautifulSoup  

#### Languages used for Logic Development
Javascript  
Python  

#### Machine Learning Model
For optimal scheduling of the manufacturing, machine learning models are used as to predict the forecasted demand based on time series and external factors being extracted from various sources like product rating, competitor's pricing, market prominence, etc.and thus leading to develop a feedback based interactive model being implemented for supplying data to the Optimization Engine. For the  subsequent time series based modelling, the LightGBM model was used for its varied of better methods of boosting weighted trees based on gradient differences. For passing parameters, we collected data about the product rating and competitior pricing through the methods of data mining using the beautifulSoup Framework and also implemented a NLP based sentimental analysis model for finding market prominence of the brand or the product based on social media data related to them. By collecting all this data, and doing predictions about future demand based on them we let the optimization model schedule the lines to run.


#### Optimization Model
Assumptions:  
● Factory has minimum 3 lines  
● There are infinite number of lines  
● Steps need to be done serially and all steps in one line  
● Order needs to be completed before deadline  
Firstly pending orders are fetched, after that the order is segregated based on the deadline and
time taken for production. If there are laptops which need to be delivered soon then the program
finds the number of lines required to complete that order and once it is completed for that
particular day all orders are processed using the number of lines it was already working on. If
there are no orders which require immediate attention then the factory runs at its minimum
capacity of 3 lines. After getting the number of lines required the order is then fed into another
function which does the arrangement of the products in the line so as to reduce the idle time of
each line and optimising daily output. After dealing with pending orders forecast data is fed into
the engine with the current pending orders and the above steps are repeated.
The orders are prioritized based on their deadline and time for production. Initially all the lines
are assigned a single product based on this priority. Before scheduling another product on the
line , it is checked which line has less load currently, so that at the end of the day no line stays
idle for much time.
