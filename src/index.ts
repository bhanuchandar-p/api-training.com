import { serve } from '@hono/node-server'
import { Context, Hono } from 'hono'
import authRouter from './routers/authRouter';

const app = new Hono().basePath(`/api/${process.env.API_VERSION}`);

app.get('/', (c:Context) => {
  return c.text('Hello Hono!')
})

app.route('/auth',authRouter)


app.onError((err:any, c:Context)=>{
  c.status(err.status || 500)
  return c.json({
    message: err.message,
    success: false,
    status: err.status || 500,
    data: err.errData
  })

})


const port = Number(process.env.PORT) || 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
