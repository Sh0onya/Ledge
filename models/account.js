const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  title: {
    type: String,
    
  },
  amount: {
    type: Number,
    
  },
  category: {
    type: String,
    
  },
  isexpense: {
    type: Boolean,
    
  },
  postranbal:{
    type: Number,
    
  },
  tstamp: {
    type: Date,
    default: Date.now(),    
  },
  description: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
})


const notificationSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  title: {
    type: String,
    
  },
  amount: {
    type: Number,
    
  },
  category: {
    type: String,
    
  },
  isexpense: {
    type: Boolean,
    
  },
  tstamp: {
    type: Date,
  },
  repeat: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
  }
})


const assetSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  description: {
    type: String
  },
  amount: {
    type: Number,
  },
  units: {
    type: Number,
  },
  category: {
    type: String,
  },
  tape: {
    type:String,
    default:"Nothing"
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const accountSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  name: {
    type: String,
    
  },
  tcreate: {
    type: Date,
    default: Date.now(),    
  },
  dob: {
    type: Date,
    default: Date.now(),    
  },
  dnw:{
    type: Number,
    default:0
  },
  aor:{
    type: Number,
    default:50
  },
  expense:{
    type: Number,
    default:0
  },
  income:{
    type: Number,
  },
  uexpense:{
    type: Number,
    default:0
  },
  uincome:{
    type: Number,
    default:0
  },
  transum:{
    type: Number,
    
  },
  currency:{
    type:String,
  },
  currbal: {
    type: Number,
    
  },
  onhold: {
    type: Number,
    default:0
  },
  debt: {
    type: Number,
    default:0
    
  },
  isActive:{
    type: Boolean,
    default: true

  },
  prook:{
    type:Number,
    default:0
  },
  activity: {
    type: [activitySchema]
  },
  asset: {
    type: [assetSchema]
  },
  notification: {
    type: [notificationSchema]
  }
})

module.exports = mongoose.model('Account', accountSchema)