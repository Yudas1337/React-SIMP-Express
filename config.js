module.exports.connect = connect = () => {
    const mongoose = require('mongoose')
    const dotenv = require('dotenv')
    dotenv.config()
    mongoose.set('useUnifiedTopology', true)
    mongoose.set('useFindAndModify', false);
    mongoose.connect(process.env.DB_CONNECT,
        {useNewUrlParser: true}).then( response => {
            console.log('Database Connected! ')
        }).catch(error =>{
    console.log('Database '+error.message)
    })
}
