import mongoose from 'mongoose'

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      // required: [true, 'why no quantity'],
    },
    price: Number,
  },
  {
    timestamps: true
  }
)

export const Room = mongoose.model('room', roomSchema)
