import { Account } from './account';
import { Category } from './category';

export class Transaction {
    transaction_id: number;
    transaction_type_id: number;
    amount: number;
    balance_id: number;
    category_id: number;
    comment: string;
    date: Date;
    child_to: number;
    order: number;
    account: Account;
    category: Category;
}
