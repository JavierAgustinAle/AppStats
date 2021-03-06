// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Users API
  URL: 'https://randomuser.me/api/?',

  // Posts API
  POSTS_URL: 'https:///bikeindex.org:443/api/v3/search',
  POST_GET_BY_ID: 'https://bikeindex.org:443/api/v3/bikes',

  // Tags API
  TAGS_URL: 'https://dummyapi.io/data/v1/tag',
  API_KEY: '625b1cbe96cdd438e9d897e2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
