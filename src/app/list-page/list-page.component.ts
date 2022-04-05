import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersDataService} from "../shared/users-data.service";
import {UserItem} from "../shared/interfaces";
import {BehaviorSubject} from "rxjs";

export enum LoadedUsersType {
    Income = 1,
    Outcome = 2,
    Loan = 3,
    Investment = 4
}

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
    users!: UserItem[]
    incomeUsers: UserItem[] = this.usersService.data.filter(user => user.type === 'income')
    outcomeUsers: UserItem[] = this.usersService.data.filter(user => user.type === 'outcome')
    loanUsers: UserItem[] = this.usersService.data.filter(user => user.type === 'loan')
    investmentUsers: UserItem[] = this.usersService.data.filter(user => user.type === 'investment')

    currentUsersType$ = new BehaviorSubject<LoadedUsersType>(LoadedUsersType.Income)
    LoadedUsersType = LoadedUsersType

    constructor(private router: Router, public usersService: UsersDataService) {
    }

    ngOnInit(): void {
    }

    showIncome() {
        this.router.navigate(['/navigator'], {queryParams: {tab: 0}});
        this.currentUsersType$.next(LoadedUsersType.Income)
    }

    showOutcome() {
        this.router.navigate(['/navigator'], {queryParams: {tab: 1}});
        this.currentUsersType$.next(LoadedUsersType.Outcome)
    }

    showLoans() {
        this.router.navigate(['/navigator'], {queryParams: {tab: 2}});
        this.currentUsersType$.next(LoadedUsersType.Loan)
    }

    showInvestments() {
        this.router.navigate(['/navigator'], {queryParams: {tab: 3}});
        this.currentUsersType$.next(LoadedUsersType.Investment)
    }
}
