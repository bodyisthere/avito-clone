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
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    
    description: {
        city: {type: String, required: false, default: ''},
        dateOfBirth: {type: String, required: false, default: ''},
        avatar: {type: String, required: false, default: ''},
    },
    roles: [{type: String, ref: "Role"}],
    phoneNumber: {type: Number, required: false, default: 0},

    isActivated: {type: Boolean, required: false, default: false},
    activationLink: {type: String, required: true},

    followersList: {type: Array, required: false, default: []},
    followList: {type: Array, required: false, default: []},

    ads: {type: Array, required: false, default: []},

    notifications: {type: Array, required: false, default: []},

    conversations: {type: Array, required: false, default: []},
},
{
    timestamps: true,
})

export default mongoose.model("User", UserSchema);