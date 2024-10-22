import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: String,
        
      },
      name: {
        type: String,
        
      },
    },
    products: [
      { 
        id: {
          type: Number,
          
        },
        name: {
          type: String,
          
        },
        price: {
          type: Number,
          
        },
        category: {
          type: String,
          
        },
        url: {
          type: String,
          
        },
        quantity: {
          type: String,
          
        },
      },
    ],
    status: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model('Order', OrderSchema);