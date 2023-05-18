import express from 'express'
import { Room } from '../models/roomModel.js'

const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const products = await Room.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})
router.get('/:id', async(req, res) => {
  try {
    const { id } = req.params
    const product = await Room.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})
router.put('/:id', async(req, res) => {
  try {
    const { id } = req.params
    const product = await Room.findByIdAndUpdate(id, req.body)
    if (!product) return res.status(404).json({ message: `cannt find item form ID`})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})

router.post('/', async(req, res) => {
  try {
    const product = await Room.create(req.body)
    res.status(200).end()
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})

export default router
