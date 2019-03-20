import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { UsersComponent } from "./users.component";

const usersRouting: Routes = [
    {
        path: '',
        component: UsersComponent
    }
]

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(usersRouting)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule { }