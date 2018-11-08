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

## Docker Setup
 * The services may be configured as a Docker container. First, acquire the node:11.1.0 and mysql:latest images: `docker pull node:11.1.0 mysql:latest`
 * Run the mysql instance:
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD='' -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql:5.7
```

 * Run `docker network inspect bridge` and note the IP address of the mysql container. Ensure the host is in each database JS file.

 * For each service, build the docker instance:
TODO: Remove the need to build the bundle inside the container, then only production NPM dependencies would be needed
```
docker build -t checkout .
```
TODO: Later start using volumes, but it's not necessary since development is done
 * Deploy the docker instance:
```
docker run -d -p 3000:3000 --name proxy proxy
docker run -d -p 3001:3001 --name summary summary
docker run -d -p 3002:3002 --name photos photos
docker run -d -p 3003:3003 --name reviews reviews
docker run -d -p 3004:3004 --name checkout checkout
```

 * If you run into errors during build, you may delete dangling images by: `docker rmi $(docker images --filter 'dangling=true' -q)`

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
