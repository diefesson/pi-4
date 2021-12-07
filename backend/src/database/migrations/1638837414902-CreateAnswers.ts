import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnswers1638837414902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "answers",
                columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated:true
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "isCorrect",
                    type: "boolean",
                    default: false
                },
                {
                    name: "question_id",
                    type: "int",
                    isNullable: false
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
            ],
            foreignKeys: [
                {
                    name: "FKQuestion",
                    referencedTableName: "questions",
                    referencedColumnNames: ["id"],
                    columnNames: ["question_id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("answers");
    }


}
