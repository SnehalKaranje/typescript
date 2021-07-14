export enum TodoState {
    New = 1,
    Active,
    Done,
    Deleted
}

export interface Todo {
    id : number;
    name : string;
    state : TodoState;
}