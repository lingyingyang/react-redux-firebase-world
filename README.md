# React-Redux-Firebase-World
[Click here to have a try]('https://react-redux-firebase-world.web.app/')

## Developing Project
Run `npm install react-router-dom`

Run `npm install redux react-redux`

Run `npm install redux-thunk`

Run `npm install firebase`

Run `npm install react-redux-firebase redux-firestore`

Run `npm install moment`

## Firebase - Cloud Functions settings
1. Run `npm install -g firebase-tools`
2. Login Firebase: `firebase login`
3. Initiate your project: `firebase init`
4. Deploy your functions: `firebase deploy`

## Firebase - Hosting settings

1. Build production: `npm run build`
2. Copy all files in /build to /dist
3. Deploy Hosting: `firebase deploy`

## Issues
### react-redux-firebase v3 migration
#### 1st solution
[V3 migration guide]('http://docs.react-redux-firebase.com/history/v3.0.0/docs/v3-migration-guide.html') | [stackoverflow]('https://stackoverflow.com/questions/53872757/react-redux-v6-a-v3-version-of-react-redux-firebase-is-required')

we can update it to v3 with `npm install react-redux-firebase@next`

v3 is next major release and not yet installable with `npm install react-redux-firebase@latest` at this time.
#### 2rd solution
install previous react-redux veriosn, by running `npm install react-redux@5.0.7`