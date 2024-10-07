const mongoose = require('mongoose');
const user = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true
    },
    university:{
        type: String,
        required: true
    },
    fieldOfStudy:{
        type: String,
        required: true
    },
    gradeLevel:{
        type:String,
        required: true
    },
    languagesYouKnow:{
        type:Object,
        required: true
    },
    scientificInterests:{
        type: Object,
        required: true
    },
    relevantExperiences:{
        type: String,
        required: true
    },
    whyJoin:{
        type: String,
        required: true
    }
});
const users = mongoose.model('users', user);

module.exports = users;