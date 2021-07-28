const ErrorHandler = (err) => {
    const errors = {name:null, profilePicture:null, username:null, followers:null, following:null, posts:null}
    if(err.message.includes('userModel validation failed')){
        Object.values(err.errors).forEach((errorVal) => {
            errors[errorVal.path] = errorVal.message;
        })
    }
    return errors;
}

module.exports = {
    ErrorHandler
}