# Express & Mongo Decentralized App using Docker Compose
Note: Don't directly use this for production

Pre-requisites- Git, Docker

Clone the repo using 
``` git clone <repo url>```
Run Docker compose to get the containers up and running
``` docker-compose up -d```

Visit: to check the app running
```http://localhost:3030/``` 

- Any changes you make to files inside express-app will be reflected in the express docker container

To stop the containers and not remove them
``` docker-compose stop```

To stop the containers and remove them 
``` docker-compose down```
