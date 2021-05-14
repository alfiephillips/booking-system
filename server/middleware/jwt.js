const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 60,
        jwksUri: 'https://booking-sys.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000',
  issuer: 'https://booking-sys.eu.auth0.com/',
  algorithms: ['RS256']
});

module.exports = jwtCheck;