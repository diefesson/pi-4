import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { SituationInTheGame } from "./enums/SituationInTheGame";
import { Players } from "./Players";

Entity("statistics")
class Statistics{
    
    @PrimaryColumn()
    id:number;

    @ManyToOne( () => Players)
    @JoinColumn( {name: "players"})
    player: Players;

    @Column()
    player_id: number;

    @Column({type: 'enum', enum: SituationInTheGame})
    status: SituationInTheGame;

    @Column()
    statusDescription: string;

    @Column()
    correctTotal: boolean;

    @Column()
    created_at: Date;   

    @Column()
    updated_at: Date;   
    
    @Column()
    deleted_at: Date;


}