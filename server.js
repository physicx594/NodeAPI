import express from 'express'
import mongoose from 'mongoose'
import indexRouter from './routes/index.js'
import rooms from './routes/room.js'
const app = express()

app.use(express.json())

app.use('/', indexRouter)
app.use('/rooms', rooms)


mongoose.
connect('mongodb://localhost:27017/nodeAPI')
.then(() => {
  app.listen(3000, () => {
    console.log('監聽3000');
  })
  console.log('connect mongodb');
}).catch(()=>{
  console.log('connect fail');
})