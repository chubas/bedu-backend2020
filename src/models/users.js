const Pet = require("./pets");

const User = mongoose.model({
  //...
})

User.methods.authenticate = () => { /* ... */ }
User.register = (data, password) => { /* ... */ }
User.methods.getPublicInfo = () => { /* ... */ }
