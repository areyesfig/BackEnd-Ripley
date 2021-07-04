const app = require('./app');
const {createConnection} = require('./database');
const dotenv =  require('dotenv');
const cors = require('cors');
app.use(cors());
dotenv.config();


createConnection();
app.listen( process.env.PORT );
console.log("Escuchando en sevidor :" ,process.env.PORT);