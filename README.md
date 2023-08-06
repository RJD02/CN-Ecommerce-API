# E-Commerce API

A CRUD application to create, read, update and delete using MONGODB. The routes are as follows

## Routes:

- `GET /products/` - Get all the products inside database.

```JS
data: { products: [{id: Number, name: String, quantity: Number}]}
```

- `POST /products/create` - Create a new product(name and quantity required). The id is incrementally generated and is added to the product at the time of saving to db.

```js
// request
product: {name: String, quantity: Number}

// response
data: {product: {name: String, quantity: Number}}
```

- `DELETE /products/:id` - Delete a product with id, which is passed through the query params.

```js
// response
data: {
  message: "product deleted";
}
```

- `POST /products/:id/update_quantity/?number=10` - This route updates the quantity of product with the given id

```js
// response
data: {product: {id: Number, name: String, quantity: Number}, message: String}
```

## Tech Stack:

- JavaScript(TypeScript)
- Packages: Express and Mongoose
- Testing Framework: Jest

## Folder Structure

- All the TypeScript code is located inside the src folder
- All the compiled JavaScript is located into dist folder
- Config folder contains db connection
- Controllers folder contains the functional blocks for route controller
- models folder contains the schema for mongodb
- routes folder contains the routes for api

## Installation and Setup

Clone this github repository, using following command inside your terminal

`git clone https://github.com/RJD02/CN-Ecommerce-API.git`

After cloning, make sure your mongo deamon is up. To start mongo deamon, do

```bash
mongod --dbpath=%YOUR_DB_PATH%
```

To install all the dependencies inside the project, run

```bash
npm install
```

After installing, run

```bash
npm build
````

After building, start the server by,

```bash
npm start
```

The server starts on port 3000
Now, you can test out the API using POSTMAN
