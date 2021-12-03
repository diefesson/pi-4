import { Model, DataTypes } from "sequelize";
import connection from "../database";
import Players from "./Players";

class Questions extends Model{
    public id!: number;
    public utterance!: string;
    public deleted_at!: Date;
}

Questions.init(
    {
        utterance: DataTypes.STRING,
        deleted_at: DataTypes.DATE,
    },{
        sequelize: connection
    }
);

Questions.belongsTo(Players, 
    {        
        foreignKey: 'created_PlayerId',
        as: 'Created_Player'
    }
);   

export default Questions;