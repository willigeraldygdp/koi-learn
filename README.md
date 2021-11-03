# koi-learn
Creating a simple nest js application with rest api using typeorm to  mariadb 10.5 and redis 6.2.2, with yarn package manager

## Config
There are user and job api available. We can manage database and redis connection in the config directory

## API

  ### User API (/user)
  Implementing a simple CRUD operation, using typeORM to mapping object to database

  ### Job API (/job)
  Implementing redis queue using <b>bull</b> library, implementing job producer, consumer, listener, and resumer