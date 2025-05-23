import dotenv from 'dotenv';
dotenv.config();

module.exports={
    "development":{
        username:process.env.user,
        password:process.env.password,
        database:process.env.database_dev,
        host:process.env.host,
        dialect:"mysql"
    },
    "production":{
        username:process.env.user,
        password:process.env.password,
        database:process.env.database,
        host:process.env.host,
        dialect:"mysql"
    }
}

