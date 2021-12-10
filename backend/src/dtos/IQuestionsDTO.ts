
interface IQuestionsDTO{  
    id?:number; 
    utterance: string;
    player_id: number;
    created_at?:Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export {IQuestionsDTO};