import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersDataService} from "../shared/users-data.service";
import {UserItem, UserType} from "../shared/interfaces";
import {combineLatest} from "rxjs";

export const USER_TYPES: UserType[] = ['income', 'outcome', 'loan', 'investment']

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {
    users!: UserItem[]
    readonly types = USER_TYPES

    constructor(private router: Router, private activatedRoute: ActivatedRoute, public usersService: UsersDataService) {
    }

    ngOnInit(): void {
        combineLatest([this.activatedRoute.queryParams, this.usersService.data$]).subscribe(([query, users]) => {
            const tab = query['tab']
            const selectedType = USER_TYPES[tab]
            this.users = users.filter(user => user.type === selectedType)
        })
    }
}
