import { CreditCard } from '../card/creditCard';

export class User {
    id: number;
    emailAdress: string;
    password: string;
    firstName: string;
    secondName: string;
    readonly registrationDate: Date;
    isPremium: boolean;
    creditCards?: CreditCard[];
}
