var serve = require('koa-static-server')
var koa = require('koa')

const app = new koa()

const port = 9090

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});

app.use(serve({rootDir: '../sub/build', rootPath: '/sub'}))

app.listen(port)

console.log('listening on port 9090')
