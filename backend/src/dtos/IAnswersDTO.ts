

interface IAnswersDTO{
    id?:number;
    description: string;
    isCorrect: boolean;
    question_id?: number;
    created_at?:Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export {IAnswersDTO};