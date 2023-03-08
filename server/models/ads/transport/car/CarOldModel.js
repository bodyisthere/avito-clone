import mongoose, { Schema } from "mongoose";

const CarSchema = new mongoose.Schema({
  //old
  data: {
    name: {type: String, required: true},
    type: {type: String, required: true},
  
    photo: {type: Array, required: true}, 
    color: {type: String, required: true},
    video: {type: String, required: false},
  
    VIN: {type: String, required: true},
    governmentNumber: {
      main: {type: String, required: true},
      region: {type: Number, required: true}
    },
    
    brand: {type: String, required: true},
  
    mileage: {type: Number, required: true},
    condition: {type: String, required: true},
    vehiclePassport: {type: String, required: true},
    vehiclePassportOwners: {type: String, required: true},
    inspectionData: {type: Array, required: true},
  
    conditionBody: {type: Array, required: false},
  
    additionalOptions: {
      powerSteering: {type: String, required: false},
      climatControl: {select: {type: String, required: false}, checkbox: {type: Array, required: false}},
      salon: {select: {type: String, required: false}, checkbox: {type: Array, required: false}},
      heating: {type: Array, required: false},
      powerWindows: {type: String, required: false},
      electricDrive: {type: Array, required: false},
      settingsMemory: {type: Array, required: false},
      drivingAssistance: {type: Array, required: false},
      antiThiefSystem: {type: Array, required: false},
      airbags: {type: Array, required: false},
      activeSafety:  {type: Array, required: false},
      multimedia: {type: Array, required: false},
      audioSystem: {select: {type: String, required: false}, checkbox: {type: Array, required: false}},
      headlights: {select: {type: String, required: false}, checkbox: {type: Array, required: false}},
      tiresWheels: {select: {type: String, required: false}, checkbox: {type: Array, required: false}},
    },
  
    description: {type: String, required: true}, 
    meetingPoint: {type: String, required: true}, 
    price: {type: Number, required: true},
  },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  views: {type: Number, required: true, default: 0},
  likes: {type: Array, required: false, default: []},
  tags: {type: Array, required: true},
},
{
  timestamps: true,
}
)

export default mongoose.model("CarOldAds", CarSchema);