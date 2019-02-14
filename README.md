# Tags Cloud
this a pure test task with no commit history of how was this boilerplate created. 
If you`re interesting in, check commit historyu here: 
https://github.com/Dmitriu-Antares/blockchain-cli 

P.S btw, this is not a lates version, all next commits goes on a Gitlab with 
linter, continious integration on AWS EB2, etc.

#Readme:
This app is not about interface beauty, but about architecture. Researching of new solutions is in progress, so template is not done yet.

What you will see:
- SSR in a beautiful helpers form 
- chunks system (lazy loading for page, that client do not need in the current moment in browser, also thay will be cashed for next fast load )
- awesome CSS modules and POST CSS that renders on a server (it makes our loading little bit faster)
- Typescript (but for now there are not a lot of interface and a lot of any, sorry about that, need time to thinks about better type structure for this architecture)
- There is not TSLINT and autofix on this branch for now, so code style is not that great. It`s in process
- A few options about "how to render component for mobile/desktop" - check out Blockchains and Blockchain (also here is a lazy load, so on mobile we do not download desktop version!)
- Saga helper for TS, that makes work with redux easier and faster
- some custom webpack modules
- React router 4



address: http://localhost:3030/

#Development
Frontend:
```sh
yarn
yarn build-dev (only for a first time)
yarn dev
```


#Production
Frontend:
```sh
yarn 
yarn build-prod
yarn start
```
