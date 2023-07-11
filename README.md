### Steps to reproduce

```sh
npm ci
npm run build
npm run start
```

Then call `http://localhost:3000/`

An error appears and request is not successful:
```
Cannot read properties of undefined (reading 'callHook')
  at file://./server/chunks/app/server.mjs:11831:11  
  at file://./server/chunks/app/server.mjs:11812:5  
  at createApp (file://./server/chunks/app/server.mjs:11963:11)  
  at async server (file://./server/chunks/app/server.mjs:12049:27)  
  at async renderToString (file://./server/chunks/app/render.mjs:258:19)  
  at async renderMiddleware (file://./server/chunks/app/render.mjs:572:20)  
  at async handle (file://./server/node_modules/h3/dist/index.mjs:601:19)
```
