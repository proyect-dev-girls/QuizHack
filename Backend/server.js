import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;


//middleware
app.use(cors());
app.use(express.json());

// Sincronizar la base de datos
sequelize.sync().then(()=> console.log("Base de datos sincronizada"));

// Rutas
app.use('/api/users', userRoutes);



app.listen(port, ()=> {
    console.log(`Servidor conectado, http://localhost:${port}`)
});