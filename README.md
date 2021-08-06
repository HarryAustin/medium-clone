# Medium Blog clone

### Description
> This is a very minimalistic project with less but cool features and good logic of understanding node, express and mongoDb with mongoose ORM, and for learning purposes to finally undertand the basics of node, express, MONGODB and mongoose with CRUD functionalities.
---

# Getting started
Details about the journey of the project

## Why building this app?
After diving into node.js and express framework, without building advanced stuff and getting confused during the process, i decided to start from scratch by breaking down the tools needed for a smooth journey into backend with node and offcourse what better way to do that than to build CRUD Apps with hard but not advanced features lol, and this project has aid me in being one of them.

Not like i'm feeling lazy,

but i believe the best way to learn is to really "LEARN"(diving deep) and actually understanding the process.
---
------

## Tools used for project
* Node js
* express framework
* body-parser
* mongoDb and mongoose ORM
* Multer
* express-handlebars

## Features
1. The home page with the article feeds has articles from users logged in user follows.
1. Since there is no authentication, i decided to use IDs help identify user, and carry out user's logic such as "follow", "articles from users", e.t.c
1. Error handlers to validate user data while creating a new user


## How to setup project
1. first of all install the dependencies by opening your command terminal to your respective folders and typing 
```
npm install
```
2. You can install nodemon as a dev dependency to help restart node process when a change to files happens
```
npm i nodemon --dev  
```
3. setup scripts to help run server
```
"scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
```
4. default port is 3000, then
```
npm run dev
```
will start the server with a response of 
```
MongoDb connected succesfully at 127.0.0.1
Server is running at http://localhost:3000
```

## contributors
* ### Osagiede harrison
----

# API Documentation

# Medium clone

# Medium Clone App and API
> A mini clone with less but cool features and good logic of understanding node, express and mongoDb with mongoose ORM

## Indices

* [Auth logic and APIs](#auth-logic-and-apis)

  * [127.0.0.1:3000/api/users/](#1-127001:3000apiusers)
  * [127.0.0.1:3000/api/users/create](#2-127001:3000apiuserscreate)
  * [127.0.0.1:3000/api/users/update/610da15266878c3064fee59a](#3-127001:3000apiusersupdate610da15266878c3064fee59a)

* [Blog APIs](#blog-apis)

  * [127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c](#1-127001:3000posts61046d3a58d96d1f2caad99c)
  * [127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/article/6109afed6832a128c863bbc5](#2-127001:3000posts61046d3a58d96d1f2caad99carticle6109afed6832a128c863bbc5)
  * [127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/create](#3-127001:3000posts61046d3a58d96d1f2caad99ccreate)
  * [127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/follow/610da15266878c3064fee59a](#4-127001:3000posts61046d3a58d96d1f2caad99cfollow610da15266878c3064fee59a)


--------


## Auth logic and APIs
# Auth logic

The authentication doesnt involve the real method of having to Authenticate users as the main aim was focused more on mongoDb and mongoose ORM including its operators such as ```$and``` for combining logic queries, ```$in``` for filtering related users with their ids.

## How to identify a User
The route has an id attached to it, which we query with and helps to know which user is currently "logged in" offcourse since there is no authentication, it's actually just for the learning purpose



### 1. 127.0.0.1:3000/api/users/


This lists all the users in the database, with each user fields: 'name', 'profilePicture-uri', 'username', 'followers', 'following', 'posts'


***Endpoint:***

```bash
Method: GET
Type: 
URL: 127.0.0.1:3000/api/users/
```



***More example Requests/Responses:***


##### I. Example Request: Successful Response of all Users



##### I. Example Response: Successful Response of all Users
```js
{
    "users": [
        {
            "followers": [
                "61046d7658d96d1f2caad99e",
                "61046da458d96d1f2caad9a0"
            ],
            "following": [
                "61046d7658d96d1f2caad99e",
                "61046da458d96d1f2caad9a0"
            ],
            "posts": [
                "61058dc84c20cb1470313679",
                "61058fdd4c20cb147031367c",
                "6109ae51e1f85614e06311fa"
            ],
            "_id": "61046d3a58d96d1f2caad99c",
            "name": "john snow",
            "username": "reader",
            "profilePicture": "media\\profile-picture\\006.jpgvq7ymrt20hsp62wsfo9e11h6tjzn9die.jpg",
            "__v": 0
        },
        {
            "followers": [
                "61046d3a58d96d1f2caad99c"
            ],
            "following": [
                "61046d3a58d96d1f2caad99c"
            ],
            "posts": [
                "61059b6e19ad9413f00af0ac",
                "61059b8219ad9413f00af0af",
                "61078fbc98b9452c9091e3bc",
                "6109afed6832a128c863bbc5",
                "6109b02c6832a128c863bbca",
                "610af84e033ff303186cb9f0",
                "610afa8022a69303d41c2ffc"
            ],
            "_id": "61046d7658d96d1f2caad99e",
            "name": "jane doe",
            "username": "black_quenn",
            "profilePicture": "media\\profile-picture\\009.jpgnrclasfuwdowhhykeltjnuxbk7d9nh5p.jpg",
            "__v": 0
        },
        {
            "followers": [
                "61046d3a58d96d1f2caad99c"
            ],
            "following": [
                "61046d3a58d96d1f2caad99c"
            ],
            "posts": [],
            "_id": "61046da458d96d1f2caad9a0",
            "name": "david henson",
            "username": "book_worm",
            "profilePicture": "media\\profile-picture\\010.jpgz3eeanxnt3q2qexdtxxr04r8iog3jcnz.jpg",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. 127.0.0.1:3000/api/users/create


A post request with the same route for creating a user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: 127.0.0.1:3000/api/users/create
```



***Body:***

```js        
{
    "name":"h",
    "username":"hh"
}
```



***More example Requests/Responses:***


##### I. Example Request: Error when body is empty



##### I. Example Response: Error when body is empty
```js
{
    "errors": {
        "name": "User must have a name",
        "profilePicture": null,
        "username": "username is required",
        "followers": null,
        "following": null,
        "posts": null
    }
}
```


***Status Code:*** 400

<br>



##### II. Example Request: Error when validation requirements are not meant, such as required length for user username



***Body:***

```js        
{
    "name":"h",
    "username":"hh"
}
```



##### II. Example Response: Error when validation requirements are not meant, such as required length for user username
```js
{
    "errors": {
        "name": null,
        "profilePicture": null,
        "username": "username must be greater than 3",
        "followers": null,
        "following": null,
        "posts": null
    }
}
```


***Status Code:*** 400

<br>



##### III. Example Request: Success when user is created with a profile picture, with a returned response of the picture uri



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| name | real user |  |
| username | double_real_user |  |
| upload |  |  |



##### III. Example Response: Success when user is created with a profile picture, with a returned response of the picture uri
```js
{
    "user": {
        "followers": [],
        "following": [],
        "posts": [],
        "_id": "610da15266878c3064fee59a",
        "name": "real user",
        "username": "double_real_user",
        "profilePicture": "media\\profile-picture\\Team.svg7h1j1sdtfdcc944so0qw1ikcnpsa567q.svg",
        "__v": 0
    },
    "message": "success"
}
```


***Status Code:*** 200

<br>



### 3. 127.0.0.1:3000/api/users/update/610da15266878c3064fee59a



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: 127.0.0.1:3000/api/users/update/610da15266878c3064fee59a
```



***Body:***

```js        
{
    "name":"real updated user"
}
```



***More example Requests/Responses:***


##### I. Example Request: Successfully updating a user with it's ID



***Body:***

```js        
{
    "name":"real updated user"
}
```



##### I. Example Response: Successfully updating a user with it's ID
```js
{
    "updatedUser": {
        "followers": [],
        "following": [],
        "posts": [],
        "_id": "610da15266878c3064fee59a",
        "name": "real updated user",
        "username": "double_real_user",
        "profilePicture": "media\\profile-picture\\Team.svg7h1j1sdtfdcc944so0qw1ikcnpsa567q.svg",
        "__v": 0
    },
    "message": "updated"
}
```


***Status Code:*** 200

<br>



## Blog APIs



### 1. 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c


List of Posts made by other users whom the user with the id is following, i.e Posts of following Users


***Endpoint:***

```bash
Method: GET
Type: 
URL: 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c
```



***More example Requests/Responses:***


##### I. Example Request: Successful Response



##### I. Example Response: Successful Response
```js
{
    "posts": [
        {
            "_id": "610afa8022a69303d41c2ffc",
            "title": "New",
            "description": "Learn about countries like india",
            "body": "New!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
            "user": "61046d7658d96d1f2caad99e",
            "timePosted": "2021-08-04T20:37:20.594Z",
            "__v": 0
        },
        {
            "_id": "610af84e033ff303186cb9f0",
            "title": "Jane on the beat",
            "description": "Testing stuff",
            "body": "just for testing, nothing else please....",
            "user": "61046d7658d96d1f2caad99e",
            "timePosted": "2021-08-04T20:27:58.379Z",
            "__v": 0
        },
        {
            "_id": "6109b02c6832a128c863bbca",
            "title": "Another Jane doe",
            "description": "Just a basic description",
            "body": "HELO!!!!! WORLD!!!! This is another from me you fav girl, Jane.\r\n\r\nPlease Rate me",
            "thumbnail": "media\\thumbnail\\Rating_1.svgie6lwoawmcuslzaj4gutkq7029b7ovli.svg",
            "user": "61046d7658d96d1f2caad99e",
            "timePosted": "2021-08-03T21:07:56.957Z",
            "__v": 0
        },
        {
            "_id": "6109afed6832a128c863bbc5",
            "title": "Jane Doe is back",
            "description": "The return of the queen",
            "body": "Hey My name is jane, and it is good to be here, can't wait to meet you guys not just here online but also physically as well.\r\n\r\n\r\ni'm also a software eng, dm if you need help",
            "thumbnail": "media\\thumbnail\\Active senior.svgt319jit9gr800mt6stuiw4g3rmu2ez8o.svg",
            "user": "61046d7658d96d1f2caad99e",
            "timePosted": "2021-08-03T21:06:53.503Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/article/6109afed6832a128c863bbc5


A single article post referenced by an id


***Endpoint:***

```bash
Method: GET
Type: 
URL: 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/create
```



### 3. 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/create


A route for creating post which automatically update the id of this user "logged in user" to the post's users id and it automatically adds a time stamp which will be used to sort articles


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/create
```



***Body:***

```js        
{
    "title":"New title for testing Api",
    "body": "I think Postman suites my needs"
}
```



***More example Requests/Responses:***


##### I. Example Request: Successful Response



***Body:***

```js        
{
    "title":"New title for testing Api",
    "body": "I think Postman suites my needs"
}
```



##### I. Example Response: Successful Response
```js
{
    "result": {
        "_id": "610db05cf3dc080efcc72d3f",
        "title": "New title for testing Api",
        "body": "I think Postman suites my needs",
        "user": "61046d3a58d96d1f2caad99c",
        "timePosted": "2021-08-06T21:57:48.958Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/follow/610da15266878c3064fee59a


Route to follow user for us to see users posts. If we dont follow a user, we wont be able to see their contents on our news wall, and if we already follow a user and click on the button, a message will be prompted to user to remind user that he/she aleeady follows the user


***Endpoint:***

```bash
Method: POST
Type: 
URL: 127.0.0.1:3000/posts/61046d3a58d96d1f2caad99c/follow/610da15266878c3064fee59a
```



***More example Requests/Responses:***


##### I. Example Request: successfully follows user



##### I. Example Response: successfully follows user
```js
{
    "following": {
        "followers": [
            "61046d7658d96d1f2caad99e",
            "61046da458d96d1f2caad9a0"
        ],
        "following": [
            "61046d7658d96d1f2caad99e",
            "61046da458d96d1f2caad9a0",
            "610da15266878c3064fee59a"
        ],
        "posts": [
            "61058dc84c20cb1470313679",
            "61058fdd4c20cb147031367c",
            "61059155fc5a800ef88a4e46",
            "6105967e19ad9413f00af0a8",
            "610868312238c92070e917da",
            "610db05cf3dc080efcc72d3f"
        ],
        "_id": "61046d3a58d96d1f2caad99c",
        "name": "john snow",
        "username": "reader",
        "profilePicture": "media\\profile-picture\\006.jpgvq7ymrt20hsp62wsfo9e11h6tjzn9die.jpg",
        "__v": 0
    },
    "followUser": {
        "followers": [
            "61046d3a58d96d1f2caad99c"
        ],
        "following": [],
        "posts": [],
        "_id": "610da15266878c3064fee59a",
        "name": "real updated user",
        "username": "double_real_user",
        "profilePicture": "media\\profile-picture\\Team.svg7h1j1sdtfdcc944so0qw1ikcnpsa567q.svg",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



##### II. Example Request: prompt to remind user that he/she already follows user



##### II. Example Response: prompt to remind user that he/she already follows user
```js
{
    "message": "Already following this user"
}
```


***Status Code:*** 200

<br>



---
> medium clone developed by osagiede harrison
[Back to top](#medium-clone)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-08-06 23:37:38 by [docgen](https://github.com/thedevsaddam/docgen)
