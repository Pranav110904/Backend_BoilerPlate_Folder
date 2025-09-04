import mongoose, { mongo } from "mongoose";


const orderSchema = new mongoose.Schema({

    userId :{
        type : mongoose.Schema.ObjectId,
        ref : 'user'
    },
    orderId:{
        type : String,
        required : [true, 'Please add an orderId'],
        unique : true
    },
    productId:{
        type: mongoose.Schema.ObjectId,
        ref : 'product'
    },
    product_details :{
        name : String,
        image: Array,
    },
    paymentId:{
        type : String,
        default : ""
    },
    paymentStatus:{
        type : String,
        default : ""
    },
    delivery_address :
    {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    delivery_status :{
        type : String,
        default : ""
    },
    subTotakAmt :
    {
        type : Number,
        default : 0
    },
    totalAmt :{
        type : Number,
        default : 0
    },
    invoice_reciept :{
        type : String,
        default : ""
    }

},{
    timestamps : true
})


const order = mongoose.model('order', orderSchema)

export default order