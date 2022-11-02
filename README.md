# Fuely

This web application was put together by team-418, made up of George Baldock, Patrik Olsson, Andy Bath and Abdul Alhariri during the project phase at Northcoders Bootcamp.

## Links

The hosted version of the app is: https://fuely.netlify.app/

(If the map is failing to load the API keys have expired, please contact one of the developers)

The backend can be found at: https://github.com/Alhariri97/be-fuely

The hosted backend can be found at: https://fuely.herokuapp.com/

## Summary

Fuely is a petrol price comparison app, based on a users location or inputted address. The petrol stations and the attached price can be viewed either in "map-view" or a "list-view". If a user is signed up and logged in, they can update the price of petrol at a given petrol station, with an updated time stamp created so all users can view when that price was submitted.

All prices are user submitted.

## How to run this app locally

To deploy this app locally, using Ubuntu, you should take the following steps:

1. Clone repo in terminal:
```js
git clone https://github.com/abath257/fuely--fe
```
2. Change into the directory:
```js
cd nc-games
```
3. Install dependencies:
```js
npm i
```

4. Create a Google API key. You can find more information on https://developers.google.com/maps/documentation/javascript/get-api-key

5. In the root directory, create 2 files and call them: 1) .env 2) .env.local

6. In the .env file, add to line 1: REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY='YOURAPIKEYHERE'

Where it says 'YOURAPIKEYHERE', this is where you will insert your unique API key, inside of single quotes

7. If you don't have one, set up a Firebase account at https://firebase.google.com/

8. Once you have set up your own Firebase account, you will need to add the following to the .env.local file:

REACT_APP_FIREBASE_API_KEY=YOURFIREBASEAPIKEYHERE
REACT_APP_FIREBASE_AUTH_DOMAIN=YOURDOMAINHERE
REACT_APP_FIREBASE_PROJECT_ID=YOURPROJECTIDHERE
REACT_APP_FIREBASE_STORAGE_BUCKET=YOURSTORAGEBUCKETHERE
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOURSENDERIDHERE
REACT_APP_FIREBASE_APP_ID=YOURAPPIDHERE

All this information can be found easily once you have setup a firebase account, and started your own project.

9. Deploy app with localhost:
```js
npm start
```

