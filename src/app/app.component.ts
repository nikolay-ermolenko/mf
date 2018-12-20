import { Component, OnInit } from '@angular/core';
import { 
    toggleMainMenu, 
    toggleMainMenuMask, 
    toggleMainMenuBlurMainContainer,
    toggleMainMenuContainerBody 
} from './app.animations';

@Component({
    selector: 'mf-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        toggleMainMenu,
        toggleMainMenuMask,
        toggleMainMenuBlurMainContainer,
        toggleMainMenuContainerBody
    ]
})
export class AppComponent implements OnInit {

    public title: string = 'Angular Material!!!';

    public animationState: string = 'hide';

    public mediumContent: string[];

    public longContent: string[];

    public ngOnInit(): void {
        this.longContent = Array
            .from({ length: 20 }, () =>
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

        this.mediumContent = Array
            .from({ length: 6 }, () =>
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

    }

    public expand(): void {
        this.animationState = this.animationState === 'show' ? 'hide' : 'show';
    }

}
