import * as express from 'express'

async function bootstrap() {
  const app = express()
  app.get('/', (req, res) => res.send('Hello World!'))
  const server = app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running')
  })
  server.on('error', console.error)
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server closed')
      process.exit(0)
    })
  })
}
bootstrap()
