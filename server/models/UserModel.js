import mongoose from "mongoose";
// _id: string
// firstName: string
// lastName: string
// email: string
// passwordHash: string
// avatar: string
// status: string
// createdAt: string
// updatedAt: string
// isActivate: boolean
// friendList: string[]
// posts: string[]
// notifications: string[]
// messages: string[]

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    
    description: {
        city: {type: String, required: false, default: ''},
        dateOfBirth: {type: String, required: false, default: ''},
        avatar: {type: String, required: false, default: ''},
        userName: {type: String, required: false},
    },
    isActivated: {type: Boolean, required: false, default: false},
    activationLink: {type: String},
    followList: {type: Array, required: false, default: []},
    followersList: {type: Array, required: false, default: []},
    announcement: {type: Array, required: false, default: []},
    notifications: {type: Array, required: false, default: []},
    conversations: {type: Array, required: false, default: []},
},
{
    timestamps: true,
})

export default mongoose.model("User", UserSchema);