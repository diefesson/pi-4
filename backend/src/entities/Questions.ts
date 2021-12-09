
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from "typeorm";
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