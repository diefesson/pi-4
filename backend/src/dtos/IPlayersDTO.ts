

interface IPlayersDTO{
    id?: number;
    name: string;
    nickname: string;
    password: string;
    avatar?: string;
    isAdmin:string ;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export {IPlayersDTO};