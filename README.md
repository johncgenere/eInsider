# eInsider

This is eInsider we are a website that provides relevant eSports information on 4 of the most popular games.

# Table of Contents
- [Setup Guide](#setup-guide)
- [Backend](#backend)
  - [API Overview](#api-overview)
    - [Base](#base)
    - [Home](#home)
    - [Fantasy](#fantasy)
    - [Users](#users)
  - [API Details](#api-details)
    - [Home](#get-home)
    - [Fantasy](#get-fantasy)
    - [Users](#get-usersprofile)

# Setup Guide
To set everything on our website up here are the steps

Open up the terminal and run these commands in this order

`git clone https://github.com/johncgenere/eInsider.git`

`cd eInsider`

`npm install`

`cd client`

`npm install`

`brew install postgresql`

`pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`

`psql postgres`

`CREATE DATABASE einsider`

`\q`

`npm start` You got the front end running

Open up a new terminal

`cd eInsider`

`npm run backend` You got the back end running

Create a file name `config.json` in the root directory the eInsider and copy and paste this code

```
{
  "token": INSERT YOUR API PANDASCORE TOKEN HERE, 
  "postgresUsername": INSERT YOUR POSTGRES USERNAME HERE
}
```

You should be good to go have fun!

# Backend

# API Overview

## Base

| endpoint               | description       |
| ---------------------- | ----------------- |
| [`[GET] /`](#get-base) | welcoming message |

## Home

| endpoint                              | description                                |
| ------------------------------------- | ------------------------------------------ |
| [`[GET] /home`](#get-home)            | 4 upcoming tournaments one for each eSport |
| [`[GET] /home/lol`](#get-homelol)     | all upcoming tournaments for LoL           |
| [`[GET] /home/dota2`](#get-homedota2) | all upcoming tournaments for Dota 2        |
| [`[GET] /home/ow`](#get-homeow)       | all upcoming tournaments for Overwatch     |
| [`[GET] /home/csgo`](#get-homecsgo)   | all upcoming tournaments for CS:GO         |

## Fantasy

| endpoint                         | description                           |
| -------------------------------- | ------------------------------------- |
| [`[GET] /fantasy`](#get-fantasy) | data on the players in fantasy league |

## Users

| endpoint                                          | description                |
| ------------------------------------------------- | -------------------------- |
| [`[GET] /users/profile`](#get-usersprofile)       | get profile of logged user |
| [`[POST] /users/favorites`](#post-usersfavorites) | change favorites of user   |
| [`[POST] /users/register`](#post-usersregister)   | register a user            |
| [`[POST] /users/login`](#post-userslogin)         | log into an account        |
| [`[DELETE] /users/logout`](#delete-userslogout)   | log out of an account      |

# API Details

## Home

#### `[GET] /home`

Returns a json with 4 of the next upcoming tournaments one for each eSport.

This is a sample `JSON` object one will receive after the `GET` request:

- `game` can only be one of the four strings `League of Legends`, `Dota 2`, `Counter-Strike: Global Offensive`, `Overwatch`
- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `leagueName` can be an empty string
- `serieName` can be an empty string

```json
{
  "lol": {
    "game": "League of Legends",
    "tournamentName": "Play-in: group a",
    "startTime": "2019-05-01T10:00:00Z",
    "endTime": "2019-05-03T16:00:00Z",
    "leagueName": "Mid-Season-Invitational",
    "serieName": ""
  },
  "dota2": {
    "game": "Dota 2",
    "tournamentName": "Group d",
    "startTime": "2019-05-03T22:00:00Z",
    "endTime": "2019-05-13T18:00:00Z",
    "leagueName": "Mars Dota League",
    "serieName": "Disneyland Paris Major"
  },
  "csgo": {
    "game": "Counter-Strike: Global Offensive",
    "tournamentName": "Group b",
    "startTime": "2019-04-30T04:20:00Z",
    "endTime": "2019-05-02T12:00:00Z",
    "leagueName": "IEM",
    "serieName": "Sydney"
  },
  "ow": {
    "game": "Overwatch",
    "tournamentName": "Stage 3",
    "startTime": "2019-06-06T23:00:00Z",
    "endTime": "2019-07-07T07:00:00Z",
    "leagueName": "Overwatch League",
    "serieName": ""
  }
}
```

#### `[GET] /home/lol`

Returns an array with all of the upcoming tournaments for LoL.

This is a sample `array` one will receive after the `GET` request:

Earliest occuring tournament is first in the array and seconding earlier occuring tournament is second in the array and this pattern continues

The size of the array varies as it depends on how many tournaments are upcoming.

- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `leagueName` can be an empty string
- `serieName` can be an empty string

```json
[
  {
    "game": "League of Legends",
    "tournamentName": "Play-in: group a",
    "startTime": "2019-05-01T10:00:00Z",
    "endTime": "2019-05-03T16:00:00Z",
    "leagueName": "Mid-Season-Invitational",
    "serieName": ""
  },
  {
    "game": "League of Legends",
    "tournamentName": "Play-in: group b",
    "startTime": "2019-05-02T10:00:00Z",
    "endTime": "2019-05-04T16:00:00Z",
    "leagueName": "Mid-Season-Invitational",
    "serieName": ""
  },
  {
    "game": "League of Legends",
    "tournamentName": "Playoffs",
    "startTime": "2019-05-04T05:00:00Z",
    "endTime": "2019-05-11T12:00:00Z",
    "leagueName": "LDL",
    "serieName": ""
  }
]
```

#### `[GET] /home/dota2`

Returns an array with all of the upcoming tournaments for Dota 2.

This is a sample `array` one will receive after the `GET` request:

Earliest occuring tournament is first in the array and seconding earlier occuring tournament is second in the array and this pattern continues

The size of the array varies as it depends on how many tournaments are upcoming.

- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `leagueName` can be an empty string
- `serieName` can be an empty string

```json
[
  {
    "game": "Dota 2",
    "tournamentName": "Group d",
    "startTime": "2019-05-03T22:00:00Z",
    "endTime": "2019-05-13T18:00:00Z",
    "leagueName": "Mars Dota League",
    "serieName": "Disneyland Paris Major"
  },
  {
    "game": "Dota 2",
    "tournamentName": "Group c",
    "startTime": "2019-05-03T22:00:00Z",
    "endTime": "2019-05-13T18:00:00Z",
    "leagueName": "Mars Dota League",
    "serieName": "Disneyland Paris Major"
  },
  {
    "game": "Dota 2",
    "tournamentName": "Group b",
    "startTime": "2019-05-03T22:00:00Z",
    "endTime": "2019-05-13T18:00:00Z",
    "leagueName": "Mars Dota League",
    "serieName": "Disneyland Paris Major"
  }
]
```

#### `[GET] /home/ow`

Returns an array with all of the upcoming tournaments for Overwatch.

This is a sample `array` one will receive after the `GET` request:

Earliest occuring tournament is first in the array and seconding earlier occuring tournament is second in the array and this pattern continues

The size of the array varies as it depends on how many tournaments are upcoming.

- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `leagueName` can be an empty string
- `serieName` can be an empty string

```json
[
  {
    "game": "Overwatch",
    "tournamentName": "Stage 3",
    "startTime": "2019-06-06T23:00:00Z",
    "endTime": "2019-07-07T07:00:00Z",
    "leagueName": "Overwatch League",
    "serieName": ""
  },
  {
    "game": "Overwatch",
    "tournamentName": "Stage 4",
    "startTime": "2019-07-25T23:00:00Z",
    "endTime": "2019-08-25T07:00:00Z",
    "leagueName": "Overwatch League",
    "serieName": ""
  }
]
```

#### `[GET] /home/csgo`

Returns an array with all of the upcoming tournaments for CS:GO.

This is a sample `array` one will receive after the `GET` request:

Earliest occuring tournament is first in the array and seconding earlier occuring tournament is second in the array and this pattern continues

The size of the array varies as it depends on how many tournaments are upcoming.

- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `leagueName` can be an empty string
- `serieName` can be an empty string

```json
[
  {
    "game": "Counter-Strike: Global Offensive",
    "tournamentName": "Group b",
    "startTime": "2019-04-30T04:20:00Z",
    "endTime": "2019-05-02T12:00:00Z",
    "leagueName": "IEM",
    "serieName": "Sydney"
  },
  {
    "game": "Counter-Strike: Global Offensive",
    "tournamentName": "Playoffs",
    "startTime": "2019-05-03T05:00:00Z",
    "endTime": "2019-05-05T10:00:00Z",
    "leagueName": "IEM",
    "serieName": "Sydney"
  },
  {
    "game": "Counter-Strike: Global Offensive",
    "tournamentName": "Play-in finals",
    "startTime": "2019-05-10T14:15:00Z",
    "endTime": "2019-05-10T17:15:00Z",
    "leagueName": "BLAST Pro Series",
    "serieName": "Madrid"
  }
]
```

## Fantasy

#### `[GET] /fantasy`

Returns an array with 12 mock fantasy players

This is a sample `array` one will receive after the `GET` request:

```json
[
  {
    "playerName": "Faker",
    "game": "LoL",
    "team": "SK Telecom T1",
    "score": "19"
  },
  {
    "playerName": "aphromoo",
    "game": "LoL",
    "team": "100 Thieves",
    "score": "13"
  },
  {
    "playerName": "Impact",
    "game": "LoL",
    "team": "Team Liquid",
    "score": "11"
  },
]
```

## Users

#### `[GET] /users/profile`

returns a session object with the session of the currently logged in user

cannot access this api without having logged in first

error message if accessed without logged in user: `'cannot view profile without existing session'`

This is a sample `JSON` one will receive after the `GET` request:

```json
{
  "cookie": {
    "originalMaxAge": null,
    "expires": null,
    "httpOnly": true,
    "path": "/"
  },
  "username": "karl",
  "lol": false,
  "dota2": false,
  "csgo": false,
  "ow": true
}
```

will receive 200 after successfully accessing a profile

#### `[POST] /users/favorites`

this endpoint allows you to change the favorites of a user

you must send in the res.body any combination of four bools to change

Here is an example `JSON` you can send:

```json
{
  "lol": false,
  "dota2": false,
  "csgo": true,
  "ow": true
}
```

You can also omit what you dont want change for example if you just want to change lol and csgo

```json
{
  "lol": false,
  "csgo": true,
}
```

You can also just send one 

```json
{
  "ow": true,
}
```

will receive 200 after successfully updating favorites

#### `[POST] /users/register`

this endpoint allows you to register a user

if there is a user already logged in you will be thrown this error
`'cannot register with an existing session'`

you must send in the res.body a username and password for example:

```json
{
  "username": "jonathan",
  "password": "joestar"
}
```

if neither username of password is not sent or one is not sent you will receive this error
`'cannot create user without username'`
OR
`'cannot create user without password'`

if the username already exists you will receive this error:
`'user with the username "insertUsernameHere" already exists'`

after that your user will be created in the database and you will receive this message:
`'user inserted into the database!'`

the session will also be updated to reflect the user just registered

you will receive a 201 after successfully completing registering

#### `[POST] /users/login`

this endpoint allows you to login 

if there is a user already logged in you will be thrown this error
`'cannot login with an already existing session'`

you must send in the res.body a username and password for example:

```json
{
  "username": "dio",
  "password": "brando"
}
```

if neither username of password is not sent or one is not sent you will receive this error
`'cannot find user without username'`
OR
`'cannot find user without password'`

if the username does not exist the following error will be thrown:
`'user does not exist'`

if the password is not correct the following error will be thrown:
`'incorrect password'`

after successfully logging in you will receive a session in `JSON` here is an example:

you will recieve a status code of 200

```json
{
  "cookie": {
    "originalMaxAge": null,
    "expires": null,
    "httpOnly": true,
    "path": "/"
  },
  "username": "karl",
  "lol": false,
  "dota2": false,
  "csgo": false,
  "ow": true
}
```

#### `[DELETE] /users/logout`

this endpoint removes the user who is currently in the session

if you try to log out without a logged in user this error will be thrown:
`'cannot logout without an existing session'`

after logging out successfully and the session is destroyed you will receive the following message:
`'logged out successfully'`

you will receive a status code of 200