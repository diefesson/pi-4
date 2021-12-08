import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStatistics1638838477943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "statistics", 
            columns:[
                {
                    name: "id",
                    type: "int",
                    isPrimary : true,
                    isGenerated:true
                },
                {
                    name: "player_id",
                    type: "int",
                    isNullable:false
                },
                {
                    name: "status",
                    type: 'enum',
                    enum: ['winner','askedToStop','answersWrong']                    
                },
                {
                    name: "statusDescription",
                    type: "varchar",
                    isNullable: true                    
                },
                {
                    name: "correctTotal",
                    type: "int"                    
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
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("statistics");
    }

}
