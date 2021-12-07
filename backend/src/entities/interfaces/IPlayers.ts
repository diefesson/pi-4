interface IPlayers{
    id?: number;
    name: string;
    nickname: string;
    password: string;
    avatar: string;
    isAdmin:string ;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export default IPlayers;