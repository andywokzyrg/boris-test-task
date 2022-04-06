import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersDataService} from "../shared/users-data.service";
import {UserItem} from "../shared/interfaces";
import {combineLatest} from "rxjs";

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {
    users!: UserItem[]

    constructor(private router: Router, private activatedRoute: ActivatedRoute, public usersService: UsersDataService) {
    }

    ngOnInit(): void {
        combineLatest(this.activatedRoute.queryParams, this.usersService.data$).subscribe(([query, users]) => {
            if (query['tab'] === '0') {
                this.users = users.filter(user => user.type === 'income')
            }
            if (query['tab'] === '1') {
                this.users = users.filter(user => user.type === 'outcome')
            }
            if (query['tab'] === '2') {
                this.users = users.filter(user => user.type === 'loan')
            }
            if (query['tab'] === '3') {
                this.users = users.filter(user => user.type === 'investment')
            }
        })
    }
}
