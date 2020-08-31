# Project: E-commerce
## Description: Week 3 & 4 Phase 2 portofolio E-commerce

## Link
https://ecommerce-client-be84f.web.app/

## End-point: Get All Products
### Description: Return all products in database with ascending order from id
Method: GET
>```
>localhost:3000/products
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibm90LmFkbWluQG1haWwuY29tIiwiaWF0IjoxNTk1Mzk2Nzc2fQ.Lu80S8NPKhKaOMipCBiK4qN3rsue_WUI8jQOWQFb-zE|

### Body (**response**)

```json
{
    "products": [
        {
            "id": 7,
            "name": "Trust Nobody",
            "image_url": "https://imgur.com/94IZMS8.jpg",
            "price": 110000,
            "stock": 10,
            "createdAt": "2020-07-29T23:33:28.534Z",
            "updatedAt": "2020-07-29T23:33:28.534Z"
        },
        {
            "id": 8,
            "name": "You Should be On My Bed",
            "image_url": "https://i.imgur.com/1n3gZbj.jpg",
            "price": 110000,
            "stock": 10,
            "createdAt": "2020-07-29T23:33:28.534Z",
            "updatedAt": "2020-07-29T23:33:28.534Z"
        },
        {
            "id": 9,
            "name": "Mrs. Rabbit Loves to Slit",
            "image_url": "https://imgur.com/P2y0C2i.jpg",
            "price": 110000,
            "stock": 10,
            "createdAt": "2020-07-29T23:33:28.534Z",
            "updatedAt": "2020-07-29T23:33:28.534Z"
        },
        {
            "id": 10,
            "name": "Human Doesn't Bite",
            "image_url": "https://imgur.com/NdZ4K0R.jpg",
            "price": 110000,
            "stock": 10,
            "createdAt": "2020-07-29T23:33:28.534Z",
            "updatedAt": "2020-07-29T23:33:28.534Z"
        },
        {
            "id": 11,
            "name": "I Owe You Nothing",
            "image_url": "https://imgur.com/1NWzhav.jpg",
            "price": 110000,
            "stock": 10,
            "createdAt": "2020-07-29T23:33:28.534Z",
            "updatedAt": "2020-07-29T23:33:28.534Z"
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Add Product
### Description: Add new product to the database.
Method: POST
>```
>localhost:3000/products
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibm90LmFkbWluQG1haWwuY29tIiwiaWF0IjoxNTk1Mzk2Nzc2fQ.Lu80S8NPKhKaOMipCBiK4qN3rsue_WUI8jQOWQFb-zE|


### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJpYXQiOjE1OTU2NzMwODN9.vp8N8NLFXZ5NbWoH7R7JreVrJ05erPA9vx9PQdyyLPs|


### Body (**request**)

```json
        {
            "name": "Trust Nobody",
            "image_url": "https://imgur.com/94IZMS8.jpg",
            "price": 110000,
            "stock": 10
        },
```

### Body (**response**)

```json
        {
            "id": 7,
            "name": "Trust Nobody",
            "image_url": "https://imgur.com/94IZMS8.jpg",
            "price": 110000,
            "stock": 10
        },
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Edit Product
### Description: Edit existing product column(s) in database
Method: PUT
>```
>localhost:3000/products/1
>```

### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJpYXQiOjE1OTU2NzMwODN9.vp8N8NLFXZ5NbWoH7R7JreVrJ05erPA9vx9PQdyyLPs|


### Body (**request**)

```json
        {
            "name": "Trust Nobody",
            "image_url": "https://imgur.com/94IZMS8.jpg",
            "price": 110000,
            "stock": 10,
        }
```


### Body (**response**)

```json
        {
            "msg": "Product successfully updated."
        }
```



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Delete Product
### Description: Delete existing product in database
Method: DELETE
>```
>localhost:3000/products/5
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibm90LmFkbWluQG1haWwuY29tIiwiaWF0IjoxNTk1Mzk2Nzc2fQ.Lu80S8NPKhKaOMipCBiK4qN3rsue_WUI8jQOWQFb-zE|


### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6ImFkbWluIiwidXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJpYXQiOjE1OTU2NzMwODN9.vp8N8NLFXZ5NbWoH7R7JreVrJ05erPA9vx9PQdyyLPs|


### Body (**response**)

```json
{
    "msg": "Product successfully deleted."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Register User
### Description: Register a new user
Method: POST
>```
>localhost:3000/register
>```
### Body (**request**)

```json
{
    "username": "customer",
    "email": "customer@mail.com",
    "password": "password"
}
```

### Body (**response**)

```json
{
    "id": 1,
    "username": "customer",
    "email": "customer@mail.com",
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: User Login
### Description: Login and get jsonwebtoken
Method: POST
>```
>localhost:3000/login
>```
### Body (**request**)

```json
{
    "email": "customer@mail.com",
    "password": "password"
}
```

### Body (**response**)

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Niwicm9sZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJyZW1vdGUiLCJlbWFpbCI6InJlbW90ZUBtYWlsLmNvbSIsImlhdCI6MTU5NjAyMDI1NX0.lQPpTcqviOMPFwg3ta-2ak427TfTmpyngt9N3uCVb9c"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Add Item to Carts
### Description: Add new item to user carts
Method: POST
>```
>localhost:3000/carts
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJjdXN0b21lciIsImVtYWlsIjoiY3VzdG9tZXJAbWFpbC5jb20iLCJpYXQiOjE1OTYwMTMyMzl9.RUQ0WM4DQgPaFIO-5uWJqpUUgNJ6vAMrcAN_L0WVMh8|


### Body (**request**)

```json
{
    "product_id": 7
}
```

### Body (**response**)

```json
{
    "cartId": 2,
    "cartProductId": 6
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Update Quantity in Cart
### Description: Change the quantity of an item in the cart
Method: PUT
>```
>localhost:3000/carts/1
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJjdXN0b21lciIsImVtYWlsIjoiY3VzdG9tZXJAbWFpbC5jb20iLCJpYXQiOjE1OTYwMTMyMzl9.RUQ0WM4DQgPaFIO-5uWJqpUUgNJ6vAMrcAN_L0WVMh8|


### Body (**request**)

```json
{
    "value":-1
}
```


### Body (**response**)

```json
{
    "message": "Successfully update item quantity."
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Remove Item From Cart
### Description: Remove Item from user cart
Method: DELETE
>```
>localhost:3000/carts/:productId
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJjdXN0b21lciIsImVtYWlsIjoiY3VzdG9tZXJAbWFpbC5jb20iLCJpYXQiOjE1OTYwMTMyMzl9.RUQ0WM4DQgPaFIO-5uWJqpUUgNJ6vAMrcAN_L0WVMh8|


### Body (**request**)

```json
{
    "cartId": 1
}
```
### Body (**response**)

```json
{
    "message": "Successfully deleted item from cart."
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Get User Cart
### Description: Get current user cart that still on-process
Method: GET
>```
>localhost:3000/carts
>```

### Body (**response**)

```json
{
    "cart": {
        "id": 1,
        "userId": 5,
        "status": "on-process",
        "createdAt": "2020-07-29T09:22:40.668Z",
        "updatedAt": "2020-07-30T04:28:44.345Z",
        "CartProducts": [
            {
                "id": 11,
                "cartId": 1,
                "productId": 9,
                "quantity": 5,
                "createdAt": "2020-07-30T03:16:36.820Z",
                "updatedAt": "2020-07-30T04:09:06.316Z",
                "Product": {
                    "id": 9,
                    "name": "Mrs. Rabbit Loves to Slit",
                    "image_url": "https://imgur.com/P2y0C2i.jpg",
                    "price": 110000,
                    "stock": 5,
                    "createdAt": "2020-07-29T23:33:28.534Z",
                    "updatedAt": "2020-07-30T04:28:44.338Z"
                }
            },
            {
                "id": 12,
                "cartId": 1,
                "productId": 10,
                "quantity": 1,
                "createdAt": "2020-07-30T03:37:07.733Z",
                "updatedAt": "2020-07-30T03:37:07.745Z",
                "Product": {
                    "id": 10,
                    "name": "Human Doesn't Bite",
                    "image_url": "https://imgur.com/NdZ4K0R.jpg",
                    "price": 110000,
                    "stock": 9,
                    "createdAt": "2020-07-29T23:33:28.534Z",
                    "updatedAt": "2020-07-30T04:28:44.343Z"
                }
            }
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


## End-point: Checkout
### Description: 
Method: PUT
>```
>localhost:3000/carts/checkout
>```
### Headers

|Content-Type|Value|
|---|---|
|access_token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImN1c3RvbWVyIiwidXNlcm5hbWUiOiJjdXN0b21lciIsImVtYWlsIjoiY3VzdG9tZXJAbWFpbC5jb20iLCJpYXQiOjE1OTYwNjk3NTZ9.ZdF8c-SzxtuICON4HwQlJLcC4ERr8atYLpUcpDIZolI|

### Body (**response**)

```json
{
    "id": 1,
    "userId": 5,
    "status": "completed",
    "createdAt": "2020-07-29T09:22:40.668Z",
    "updatedAt": "2020-07-30T04:28:44.345Z",
    "CartProducts": [
        {
            "id": 11,
            "cartId": 1,
            "productId": 9,
            "quantity": 5,
            "createdAt": "2020-07-30T03:16:36.820Z",
            "updatedAt": "2020-07-30T04:09:06.316Z",
            "Product": {
                "id": 9,
                "name": "Mrs. Rabbit Loves to Slit",
                "image_url": "https://imgur.com/P2y0C2i.jpg",
                "price": 110000,
                "stock": 10,
                "createdAt": "2020-07-29T23:33:28.534Z",
                "updatedAt": "2020-07-29T23:33:28.534Z"
            }
        },
        {
            "id": 12,
            "cartId": 1,
            "productId": 10,
            "quantity": 1,
            "createdAt": "2020-07-30T03:37:07.733Z",
            "updatedAt": "2020-07-30T03:37:07.745Z",
            "Product": {
                "id": 10,
                "name": "Human Doesn't Bite",
                "image_url": "https://imgur.com/NdZ4K0R.jpg",
                "price": 110000,
                "stock": 10,
                "createdAt": "2020-07-29T23:33:28.534Z",
                "updatedAt": "2020-07-29T23:33:28.534Z"
            }
        }
    ]
}
```
⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

_________________________________________________

