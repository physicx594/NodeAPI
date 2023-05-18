import mongoose from 'mongoose'

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
    },
    payment: {
      type: Array,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Room = mongoose.model('room', roomSchema)
