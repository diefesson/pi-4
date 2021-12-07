import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('players')
class Players {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    nickname: string;
    
    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    isAdmin:boolean ;

    @Column()
    created_at: Date;   

    @Column()
    updated_at: Date;   
    
    @Column()
    deleted_at: Date;   
 
}

export {Players} ;