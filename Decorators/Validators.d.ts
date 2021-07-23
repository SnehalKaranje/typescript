import { Todo, TodoState } from './Model';
export declare class ValidatableTodo implements Todo {
    id: number;
    name: string;
    state: TodoState;
}
export interface ValidatableTodo extends IValidatable {
}
export interface IValidatable {
    validate(): IValidationResult[];
}
export interface IValidationResult {
    isValid: boolean;
    message: string;
    property?: string;
}
export interface IValidator {
    (instance: Object): IValidationResult;
}
export declare function validate(): IValidationResult[];
export declare function validatable(target: Function): void;
export declare function required(target: Object, propertyName: string): void;
export declare function regex(pattern: string): (target: Object, propertyName: string) => void;
