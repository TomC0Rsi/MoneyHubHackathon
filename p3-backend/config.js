module.exports = {
    resourceServerUrl: "https://api.moneyhub.co.uk/v2.0",
    identityServiceUrl: "https://identity.moneyhub.co.uk",
    accountConnectUrl: "https://bank-chooser.moneyhub.co.uk/account-connect.js",
    client: {
      client_id: "1abf5f04-1da1-44f8-b703-d499a1dde71a",
      client_secret: "61e270c4-75e7-44b1-a8ce-16d4b5385bb6",
      token_endpoint_auth_method: "client_secret_basic",
      id_token_signed_response_alg: "RS256",
      request_object_signing_alg: "none",
      redirect_uri: "https://your-redirect-uri",
      response_type: "code",
      keys: [
  
        /* your jwks */
      ],
    },
  }