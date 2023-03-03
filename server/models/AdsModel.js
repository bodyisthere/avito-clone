import mongoose, { Schema } from "mongoose";

const AdsSchema = new mongoose.Schema({
  //обязательные поля
  name: {type: String, required: true},
  photo: {type: Array, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},

  //машина
  VIN: {type: String, required: false},
  brand: {type: String, required: false},
  vehiclePassport: {type: String, required: false},
  inspectionData: {type: Array, required: false}, 
  color: {type: String, required: false},
  additionalOptions: {
    powerSteering: {type: Array, required: false},
    climatControl: {
      select: {type: String, required: false},
      checkbox: {type: Array, required: false}
    },
    salon: {
      select: {type: String, required: false},
      checkbox: {type: Array, required: false}
    },
    heating: {type: Array, required: false},
    powerWindows: {type: String, required: false},
    electricDrive: {type: Array, required: false},
    settingsMemory: {type: Array, required: false},
    drivingAssistance: {type: Array, required: false},
    antiThiefSystem: {type: Array, required: false},
    airbags: {type: Array, required: false},
    activeSafety:  {type: Array, required: false},
    multimedia: {type: Array, required: false},
    audioSystem: {
      select: {type: String, required: false},
      checkbox: {type: Array, required: false}
    },
    headlights: {
      select: {type: String, required: false},
      checkbox: {type: Array, required: false}
    },
    tiresWheels: {
      select: {type: String, required: false},
      checkbox: {type: Array, required: false}
    },
    type: {type: String, required: false},
    governmentNumber: {
      main: {type: String, required: false},
      region: {type: Number, required: false},
    },
    mileage: {type: Number, required: false},
    condition: {type: String, required: false},
    vehiclePassportOwners: {type: String, required: false},
    conditionBody: {
      type: Array, required: false
    }
  },
})

export default mongoose.model("autoBrands", AdsSchema);