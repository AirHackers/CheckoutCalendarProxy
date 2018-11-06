# CheckoutCalendarProxy
Checkout and Calendar Proxy module 

## Setup
 * This repository uses Git Submodules! To properly install each service, clone with the `--recurse-submodules` flag:
```
git clone --recurse-submodules https://github.com/AirHackers/CheckoutCalendarProxy
```
 * Next, all four projects need to have their node modules installed, and then their bundles built (use `npm run build` for production bundles.)
 * After the bundles are built, launch each service server, then launch the proxy server, by default this is done with the NPM `start` script.
 * Finally you may go check out the item detail view at `http://localhost:3000/homes/30` (or any other numeric ID)

## Related Projects
 * [Summary Service](https://github.com/AirHackers/SummaryModule)
 * [Photos Service](https://github.com/AirHackers/photos-view-victor)
 * [Reviews Service](https://github.com/AirHackers/ReviewService)
 * [Checkout Service](https://github.com/AirHackers/CheckoutCalendarService)

## Service Summary
 * Item detail page endpoint: http://localhost:3000/homes/:homeId
 
| Service       | Render ID     | Port   | Bundle Location (for URL) |
| ------------- | ------------- | ------ | ------------------------- |
| Summary       | summary       |  3001  | /homes/0/dist/bundle.js   | 
| Photos        | pm-app        |  3002  | /dist/bundle.js           |
| Reviews       | reviewapp     |  3003  | /homes/0/bundle.js        |
| Checkout      | checkout      |  3004  | /dist/bundle.js           |
