import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { TransactionService } from '../../services/transaction.service';
import { AccountService } from '../../services/account.service';
import { Transaction } from '../../models/transaction';
import { Account } from '../../models/account';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public transactions: Transaction[];
  public accounts: Account[];

  constructor(
      private breadServ: BreadcrumbService,
      private transServ: TransactionService,
      private accServ: AccountService
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

    this.transServ.getTransactions()
        .then(transactions => { this.transactions = transactions;
                                console.log(this.transactions)});

    this.accServ.getAccounts()
        .then(accounts => { this.accounts = accounts;
                            console.log(this.accounts)});

}

  public ngOnDestroy() {
    this.breadServ.clear();
  }

}
