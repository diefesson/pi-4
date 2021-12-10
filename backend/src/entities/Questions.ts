
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Answers } from "./Answers";
import { Players } from "./Players";

@Entity("questions")
class Questions {

    @PrimaryColumn()
    id: number;
    
    @Column()
    utterance: string;

    @ManyToMany(()=> Players)
    @JoinColumn({name: "player_id"})
    player: Players;

    @OneToMany(type=> Answers , answer => answer.question_id)
    answers: Answers[];

    @Column()
    player_id: number;
    
    @Column()
    created_at: Date;   

    @Column()
    updated_at: Date;   
    
    @Column()
    deleted_at: Date;   
}


export  {Questions};