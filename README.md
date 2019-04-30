# eInsider

This is eInsider we are a website that provides relevant eSports information on 4 of the most popular games.

# Table of Contents
- [Backend](#backend)
  - [API Overview](#api-overview)
    - [Base](#base)
    - [Home](#home)
  - [API Details](#api-details)
    - [Home](#home)

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

# API Details

## Home

#### `[GET] /home/`

Returns a json with 4 of the next upcoming tournaments one for each eSport.

This is a sample `JSON` object one will receive after the `GET` request:

- `game` can only be one of the four strings `League of Legends`, `Dota 2`, `Counter-Strike: Global Offensive`, `Overwatch`
- `startTime` and `endTime` is in the format yyyy-mm-ddThh:ss:mmZ
- `League Name` can be an empty string
- `Serie Name` can be an empty string

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
- `League Name` can be an empty string
- `Serie Name` can be an empty string

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
- `League Name` can be an empty string
- `Serie Name` can be an empty string

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
- `League Name` can be an empty string
- `Serie Name` can be an empty string

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
- `League Name` can be an empty string
- `Serie Name` can be an empty string

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