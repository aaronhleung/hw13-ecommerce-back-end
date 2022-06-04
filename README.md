## E-commerce Back-end management application

This app utilizes the back end to manage server and database operations to fulfill all your E-commerce management needs.

### Technologies used
- JavaScript
- Node.js
- Express.js
- MySQL
- Sequelize


## Instructions on how to run the app

You'll have to create a .env file in the root folder of the app with the following:

```text
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='password'
```
As well as run:

```text
npm i
```
to get all the node modules required to run the app.

Use your credentials to run MySQL using the command
```text
mysql -u root -p
```
Enter your password. 
When successful, run
```text
source db/schema.sql
```
Then exit out of MySQL and seed the app using the command
```text
node seeds/index.js
```
and finally, run the server using the command
```text
node server.js
```

You can view a demo of the app in action here:

[part1](https://drive.google.com/file/d/1gJHBTG9vUXsruOXVcQujGfBjPBCVcfzV/view)

[part2](https://drive.google.com/file/d/1JsBqs1tUAU2Q2D4opw4JKd8zQbGfFinO/view)