# Auth

## Logs a User In

<p>Logs a User In</p>

    POST /api/v1/auth/login


### Parameters

| Name      | Type      | Description                        |
|-----------|-----------|-------------------------------------|
| username    | String        |  <p>Username of the User</p>                |
| password    | String        |  <p>Password of the User</p>                |

### Success Response

Success-Response:

```
{
    "message": "welcome, pop",
    "status": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvcCIsImlhdCI6MTYzNDU5MjIzOSwiZXhwIjoxNjM0Njc4NjM5fQ.RyKXp7JDBXS-fUNboBRH9lVje76Nnj43haMA7MJmbCI"
}

```
### Error Response

Username-Or-Password-Incorrect-Response

```
{
  "status": 401,
  "message": "invalid credentials."
}
```

## Registers a New User

<p>Registers a New User</p>

    POST /api/v1/auth/register


### Parameters

| Name      | Type      | Description                                              |
|-----------|-----------|-----------------------------------------------------------|
| username    | String        |  <p>The New Users username *Required **Must be unique</p>    |
| password    | String        |  <p>The New Users password *Required</p>                                |
| email            | String        |  <p>The New Users email, *Required **Must be unique</p>        |


### Success Response

Success-Response:

```
{
    "email": "pop@gmail.com",
    "password": "$2a$08$p26QggJQ5csnD8qPCYKMxeY/DQlKHAIPB9xO7sgBs8mjFTwQyBWCu",
    "user_id": 20,
    "username": "pop"
}
```
### Error Response

Username-Already-Taken

```
{
  "status": 422,
  "message": "username taken"
}
```

Required Field(s) empty

```
{
    "status": 400,
    "message": "username, email, and password required"
}
```
---------------------
## Update User Password

<p>update user's password</p>

    POST /api/v1/auth/update
### Parameters

| Name      | Type      | Description                                              |
|-----------|-----------|-----------------------------------------------------------|
| new password    | String        |  <p>The New Users password *Required</p>                                |
| email            | String        |  <p>The Users email, *Required **Must be unique</p>        |


### Success Response

Success-Response:

```
{
    "email": "pop@gmail.com",
    "password": "$2a$08$p26QggJQ5csnD8qPCYKMxeY/DQlKHAIPB9xO7sgBs8mjFTwQyBWCu",
    "user_id": 20,
    "username": "pop"
}
```
### Error Response

```
{
  "status": 422,
  "message": "password not valid"
}
```
## Delete user account

<p>Delete user's account</p>

    POST /api/v1/auth/delete
### Parameters
parameters: username
token is required

### Success Response

Success-Response:

```
{
    "message": "Done"
}
```
### Error Response

```
{
  "status": 422,
  "message": "request not valid"
}
```
--------------------

# Restricted routes

## get mushroom data

<p>sending all mushroom data to frontend</p>

    GET /api/v1/auth/login


### Parameters

| Name      | Type      | Description                        |
|-----------|-----------|-------------------------------------|
| token    | String        |  <p>Username of the User</p>                |

### Success Response

Success-Response:

```
[
        {
      "name": "Laetiporus gilbertsonii",
      "img": "https://www.mykoweb.com/CAF/photos/large/Laetiporus_gilbertsonii%28fs-05%29.jpg",
      "pileus": "",
  
      "lamellae": "",
      "stipe": "",
      
      "edibility": "Edible with caution. eat in small quantities.",
      "regular": false,
      "color": "yellow"
      }, ......
]

```
### Error Response

unauthorize requests

```
{
  "status": 404,
  "message": "not authorize"
}
```
