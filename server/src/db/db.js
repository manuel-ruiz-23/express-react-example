const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(error => console.log('Error al iniciar conecion con DB',error));