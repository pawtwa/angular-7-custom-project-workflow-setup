import { Component } from "@angular/core";

@Component({
    template: '<p>{{ homeText }}</p>',
    styles: []
})
export class HomeComponent {
    homeText = 'Hi there! This is Home Page :)';
}