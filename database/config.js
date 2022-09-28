const mongoose = require('mongoose');
const dbConnection = async() =>{
    try {
        const dbUser = process.env.DATABASE_USER + ':'
        const dbPass = process.env.DATABASE_PASS
        const dbPORT = process.env.PORT
        const databaseName = process.env.DATABASE_NAME
        const protocol = process.env.DB_PROTOCOL
        const dbCluster =  process.env.DBCLUSTER
        const DBconnectionString = protocol+dbUser+dbPass+dbCluster+databaseName
        await mongoose.connect(DBconnectionString,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Online');


    } catch (error) {
        console.log('ERROR',error)
        throw new Error ('Error al conectar DB')
    }
}

module.exports = {
    dbConnection
}