import { now } from "sequelize/dist/lib/utils";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlayers1638833348667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "players",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "nickname",
                        type: "varchar",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "avatar",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_at",
                        type: "timestamp"
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp"
                    }

                ]
            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("players");
    }

}
