# Taskar

To setup this project into your PC, head over and clone this repository using gh CLI or otherwise. 

## Setup Environment Variables

```
NEXT_PUBLIC_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_DEBUG=1
NEXT_PUBLIC_GEOCODE_API=apni_lao_me_nahi_de_raha
NEXT_PUBLIC_GEOCODE_URL=https://api.geoapify.com/v1/geocode/search
NEXT_PUBLIC_CASHFREE_CLIENT_ID=
NEXT_PUBLIC_CASHFREE_CLIENT_SECRET=
NEXT_PUBLIC_CASHFREE_API_VERSION=
NEXT_PUBLIC_CASHFREE_URL=https://sandbox.cashfree.com/pg/links #for testing
```

Head over to geoapify api and fetch your API and URL. Follow similar procedure to get secrets for the CASHFREE API.

Then, to install the node modules and libraries and run the server at the PORT 3000, by default
```bash
npm i && npm run dev
```
