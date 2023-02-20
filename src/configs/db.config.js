const { Sequelize } = require('sequelize');
const  postgresUri = "postgres://postgres:Mechalero1234.@127.0.0.1:5432/db_ms_dogs";
const sequelize = new Sequelize(postgresUri);

sequelize.sync({ force: false }).then(() => {
    console.log('Connection has been established successfully.'); // eslint-disable-line no-console
}).catch((e)=>{
    console.error('Unable to connect to the database:', e);
})

module.exports = sequelize;