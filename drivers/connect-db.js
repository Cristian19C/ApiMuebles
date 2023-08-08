const mongoose = require('mongoose');

const URI ="mongodb+srv://juancho2512:MPGSz0s1IQZMDktn@electiva1.ckemcot.mongodb.net/proyecto"
mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser: true, useUnifiedTopology:true
}

mongoose.connect(URI, options)
    .then(()=> console.log('conectado de forma correcta'))
    .catch( e=> console.log(e))


module.exports = mongoose;