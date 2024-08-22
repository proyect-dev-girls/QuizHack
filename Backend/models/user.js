import { DataTypes } from "sequelize";
import sequelize from "../db.js";

//Definir el modelo user

const User = sequelize.define('User', {
    
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    departament: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { 
    tableName: 'users',
    timestamps: false,

});

export default User;