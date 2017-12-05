# WatchBuddy

> Have too many shows to watch? Have some free time on certain days? Use WatchBuddy to figure out what episodes to watch for your overloaded shows!

![alt text](https://github.com/timothyhoang/watchbuddy/blob/master/screenshots/landing.png)
![alt text](https://github.com/timothyhoang/watchbuddy/blob/master/screenshots/swipe_deck.png)

## Mobile Team

  - Timothy Hoang
  - Seva Mouler
  - Quilty Kim

## Web Team

  - Daniel Tran
  - Helen Yi
  - Brian Kim

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> new user signs up and creates new account
>
> existing user logs in with credentials
>
> once logged in, user can add a popular show or search for another show
>
> if user searches for a show, app returns matches
>
> user can add show
>
> adding show will allow user to enter survey data, including the last
>
> season user was watching, episode, date user would like to begin
>
> watching show, last date available for viewing show, check off
>
> days user has available for viewing, and number of hours per days
>
> user has free
>
> upon clicking submit, user will see the season and episode selected
>
> from the survey along with the following episode

## Mobile Requirements

- @google-cloud/prediction: "^0.6.2",
- @google-cloud/storage: "^1.4.0",
- amazon-product-api: "^0.4.4",
- axios: "^0.16.2",
- express: "^4.16.2",
- install: "^0.10.1",
- jquery: "^3.2.1",
- moment: "^2.18.1",
- mysql: "^2.13.0",
- native-base: "^2.3.2",
- react: "^16.1.1",
- react-native: "0.49.3",
- react-native-communications: "^2.2.1",
- react-native-easy-grid: "^0.1.15",
- react-native-elements: "^0.17.0",
- react-native-fbsdk: "^0.6.3",
- react-native-mail: "^3.0.4",
- react-native-simple-action-sheet-ios: "0.0.1",
- react-native-vector-icons: "^4.4.2",
- request: "^2.83.0",
- underscore: "^1.8.3"

## Web Requirements

- body-parser: 1.17.2
- crypto: 1.0.1
- express: 4.15.0
- jquery: 3.1.1
- moment: 2.18.1
- mysql: 2.13.0
- react: 15.4.2
- react-datepicker: 0.55.0
- react-dom: 15.4.2
- request: 2.83.0
- semantic-ui-react: 0.74.2

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
```

### Tasks

To run the server:

```sh
npm run server-dev
```


To run the webpack:

```sh
npm run react-dev
```


To add the schema to the mysql:

```sh
mysql -u root < schema.sql
```

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

For MovieDB api guidelines to retreive information, use:

https://developers.themoviedb.org/4/getting-started


