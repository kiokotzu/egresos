// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBHcFK2D8FxFigA0kN64UJRHrAwlkBztlA',
    authDomain: 'login-egresos.firebaseapp.com',
    databaseURL: 'https://login-egresos.firebaseio.com',
    projectId: 'login-egresos',
    storageBucket: 'login-egresos.appspot.com',
    messagingSenderId: '777529251233'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
