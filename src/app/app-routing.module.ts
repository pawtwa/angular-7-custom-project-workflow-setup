import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./home.component";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ], 
    exports: [
        //HomeComponent,
        RouterModule
    ]
})
export class AppRoutingModule {

}