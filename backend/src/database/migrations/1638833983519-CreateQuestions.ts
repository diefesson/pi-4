import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateQuestions1638833983519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true
                    },
                    {
                        name: "utterance",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "player_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKPlayer",
                        referencedTableName: "players",
                        referencedColumnNames: ["id"],
                        columnNames: ["player_id"],
                        onUpdate: "SET NULL",
                        onDelete: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions");
    }

}
