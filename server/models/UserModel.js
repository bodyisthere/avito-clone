import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    avatar: {type: String, required: false, default: 'f98c1a23-86fb-4a30-9ba7-88655796e4a3.jpeg'},
    roles: [{type: String, ref: "Role"}],
    contactInfo: {
        location: {
            region: {type: String, required: false, default: ''},
            city: {
                _id: {type: String, required: false, default: ''},
                title: {type: String, required: false, default: ''},
            },
            subway: {type: String, required: false, default: ''},
            district: {type: String, required: false, default: ''},
        },
        phoneNumber: {type: String, required: false, default: ''},
    },
    ads: {type: Array, required: false, default: []},
    favorites: {type: Array, required: false, default: []},
    cart: {type: Array, required: false, default: []},
    dialogues: {type: Array, required: false, default: []},
    wallet: {type: Number, required: false, default: 0},
    isActivated: {type: Boolean, required: false, default: false},
    activationLink: {type: String, required: true},
    followers: {type: Array, required: false, default: []},
    follow: {type: Array, required: false, default: []},
    notifications: {type: Array, required: false, default: []},
},
{
    timestamps: true,
})

export default mongoose.model("User", UserSchema);