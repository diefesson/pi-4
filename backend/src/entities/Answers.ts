import { Column,ManyToOne,JoinColumn, Entity, PrimaryColumn } from "typeorm";
import {Questions} from "./Questions";

@Entity("answers")
class Answers{
    @PrimaryColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    isCorrect: boolean;

    @Column()
    question_id: number;

    @ManyToOne(()=> Questions)
    @JoinColumn({name: "question_id"})
    question: Questions;

    @Column()
    created_at: Date;   

    @Column()
    updated_at: Date;   
    
    @Column()
    deleted_at: Date;

}


export {Answers};