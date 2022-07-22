const { check } = require("express-validator");

signupValidation = [
    check('email' , 'Email Is Required').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('password', 'Password Min 6 charecters required').isLength({min:6})
];
