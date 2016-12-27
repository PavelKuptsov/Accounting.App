import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { TransactionService } from '../../services/transaction.service';
import { AccountService } from '../../services/account.service';
import { CategoryService } from '../../services/category.service';
import { Transaction } from '../../models/transaction';
import { Account } from '../../models/account';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    public transactions: Transaction[];
    public accounts: Account[];
    public categories: Category[];

    constructor(
        private breadServ: BreadcrumbService,
        private transServ: TransactionService,
        private accServ: AccountService,
        private catServ: CategoryService
    ) {
        // TODO
    }

    public ngOnInit() {
    // on place le header
        this.breadServ.set({
          description: 'HomePage',
          display: true,
          header: 'Dashboard',
          levels: [
            {
              icon: 'dashboard',
              link: ['/'],
              title: 'Home'
            }
          ]
        });
        // this.getInitialInfo();

                this.accServ.getAccounts()
                    .then(accounts => this.accounts = accounts);

                this.catServ.getCategories()
                    .then(categories => this.categories = categories);

                this.transServ.getTransactions()
                    .then(transactions => { this.transactions = transactions;
                                            this.prepareTransactions();});

    }

    public ngOnDestroy() {
        this.breadServ.clear();
    }

    public prepareTransactions(): void {
        for (let trans of this.transactions){
            trans.account = this.accounts
                .filter(acc => acc.balances
                    .filter(bal => bal.balance_id === trans.balance_id)
                    .length > 0)[0];
            var category = this.categories
                .filter(cat => cat.category_id === trans.category_id);
            trans.category = category ? category[0] : new Category();
        }
    }

    getInitialInfo(): void {

        this.accServ.getAccounts()
            .then(accounts => this.accounts = accounts);

        this.catServ.getCategories()
            .then(categories => this.categories = categories);

        this.transServ.getTransactions()
            .then(transactions => { this.transactions = transactions;
                                    this.prepareTransactions();});
    }

}
