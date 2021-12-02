import { Model, DataTypes } from "sequelize";
import connection from "../database";

class Players extends Model{
    public id!: number;
    public name!: string;
    public nickname!: string;
    public password!: string;
    public avatar!: string;
    public isAdmin!:string ;
    public deleted_at!: Date;   
 
}

Players.init(
    {
        name: DataTypes.STRING,
        nickname: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
        deleted_at: DataTypes.DATE
    },{
        sequelize: connection
    }
);

export default Players