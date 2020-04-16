// Set Server Here!!!
// const SERVER = 'DEV'
const SERVER = 'STAGING'
// const SERVER = 'PRODUCTION'

const BASE = {
  //dev
  DEV: {
    BASE_API: 'https://api-dev.snappink.com',
    BASE_PATH_API: '/api',
    DOMAIN: 'https://admin-dev.snappink.com',
    DOMAIN_BLOGGER: 'https://blogger-dev.snappink.com',

    // Test Local (Login Admin)
    // DOMAIN: 'http://localhost:3000',
    // DOMAIN_BLOGGER: '',

    // Test Local (Login Blogger)
    // DOMAIN: '',
    // DOMAIN_BLOGGER: 'http://localhost:3000',
  },
  //staging
  STAGING: {
    BASE_API: 'https://api-staging.snappink.com',
    BASE_PATH_API: '/api',
    DOMAIN: 'https://admin-staging.snappink.com',
    DOMAIN_BLOGGER: 'https://blogger-staging.snappink.com'
  },
  //production
  PRODUCTION: {
    BASE_API: 'https://api.snappink.com',
    BASE_PATH_API: '/api',
    DOMAIN: 'https://admin.snappink.com',
    DOMAIN_BLOGGER: 'https://blogger.snappink.com'
  }
}

// console.log = () => {}
// console.warn = () => {}

export const BASE_API = BASE[SERVER].BASE_API
export const BASE_PATH_API = BASE[SERVER].BASE_PATH_API
export const DOMAIN = BASE[SERVER].DOMAIN
export const DOMAIN_BLOGGER = BASE[SERVER].DOMAIN_BLOGGER

// Facebook
export const FACEBOOK_APP_ID = '431771750737736'

// Google
export const GOOGLE_MAP_KEY = 'AIzaSyBQCo2SIsgZN7AIpdFxdbjTlhp46vRLCWg'