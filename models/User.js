const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },

    email: {
        type: String,
        trim: true,            //빈칸이 있을때 빈칸을 없애준다.
        unique: 1              //이메일 중복을 방지
    },

    password: {
        type: String,
        minlength:8
    },

    role: {  //일반유저와 관리자를 나누기 위한 값으로 1: 관리자 , 0:일반유저
        type: Number,
        default: 0
    },

    image: String,

    token: {  //유효성관리를 위한 토큰
        type: String
    },

    tokenExp: {  // 토큰에 대한 유효기간  Exp: Expiration(만료)
        type: Number
    }
})

const User = mongoose.model('User',userSchema);

module.exports= { User }