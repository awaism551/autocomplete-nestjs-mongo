=>this mini project built in nestjs, mongodb was done for the task details for which are given in pdf present in this repo

Command to create container of this service:
=>docker-compose up

Above command will first pull image of official mongodb, username and password of mongodb container will also be assigned
and then our nodejs service will connect to this db

=>We have to manually populate the db with our test data which is present in this link
https://drive.google.com/file/d/19ZccD925viU2-4ajWRlJ20XdBLKHYc3Q/view
WE can do this with the help of mongodb compasss
after populating the data, our nestjs container connected to mongodb container will be running on 3000 port
we can check our "suggestions" api by sending the GET request 
For Example
http://localhost:3001/suggestions?q=a&latitude=5&longitude=3&radius=114&sort=distance