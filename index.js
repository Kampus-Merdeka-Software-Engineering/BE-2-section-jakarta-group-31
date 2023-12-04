import express  from 'express';
import { configureMiddleware } from './middleware/middleware.js';
import apiResponse  from './utils/apiResponse.js';
import usersRoute from './routes/usersRoutes.js';
import subsRoute from './routes/subsRoutes.js';
const app = express()
const port = 3000;

configureMiddleware(app);

app.use('/users', usersRoute);
app.use('/subscribe', subsRoute);
app.get('/', (req, res) => {
  apiResponse(200,'Database terhubung','Berhasil terhubung',res)
})

app.listen({port}, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
