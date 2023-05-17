import express from 'express'
 
const router = express.Router();

router.get('/', (req, res) => {
  res.send('rooms')
})

router.post('/product', async(req, res) => {
  try {
    const product = await Room.create(req.body)
    res.end()
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message})
  }
})

export default router
