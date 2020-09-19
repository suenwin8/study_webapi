import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;
    user: User;
    

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }

    ngOnInit() {
        if (this.user.id== "1")
        {this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);}
        else
        {
            this.accountService.getById(this.user.id)
            .pipe(first())
            .subscribe(user => {
                console.log(JSON.stringify(user));
                let list_user: User[] = [user];              
                this.users = list_user;
            });
        }
        
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    }
}