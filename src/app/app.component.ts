import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    private _mainMenuMaxWidth: number = 700;

    private _currentMenu: string;

    public currentMenuIndex: number = 0;

    public title: string = 'Angular Material!!!';

    public animationState: string = 'hide';

    public mediumContent: string[];

    public longContent: string[];

    public objContent: any[];



    public ngOnInit(): void {
        this.objContent = Array
        .from({ length: 80 }, (v, k) => {            
            return {
                id: k + 1,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                ${Array.from({ length: +(Math.random()*100).toFixed()}, () => `RTYRYRY `).toString()}`,
                imgWidth: 100 + +(Math.random()*100).toFixed(),
                imgHeight: 50 + +(Math.random()*100).toFixed()
            };
        });


        this.longContent = Array
            .from({ length: 200 }, () =>
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
         ${Array.from({ length: +(Math.random()*100).toFixed()}, () => `RTYRYRY `).toString()}`);

        this.mediumContent = Array
            .from({ length: 77 }, () =>
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      ${Array.from({ length: +(Math.random()*100).toFixed()}, () => `QW `).toString()}`);

    }

    public expand(item: string): void {
        if(item === null || item === this._currentMenu) {
            this._currentMenu = null;
            this.animationState = 'hide';
        } else {
            this._currentMenu = item;
            this.animationState = 'show'
            this.currentMenuIndex = ['main', 'user', 'starred'].indexOf(item);
        }
        // console.log(66, item);
        

        // this.animationState = this.animationState === 'show' ? 'hide' : 'show';
    }

    public toggleMainMenuStart(e: any): void {
        // const actualWidth: number = window.innerWidth * .8 > this._mainMenuMaxWidth
        //     ? this._mainMenuMaxWidth
        //     : window.innerWidth * .8;
        // if (e.fromState === 'hide') {
        //     // e.element.style.width = `${actualWidth}px`;
        //     // e.element.style.margin = `0 -${actualWidth - 60}px`;
        // }

        // https://www.flaticon.com/packs/interface-icon-assets
        // https://www.flaticon.com/packs/multimedia-collection
    }

    /**
     * 
     * @param e 
     */
    public toggleMainMenuDone(e: any): void {
        window.document.getElementsByTagName('body')[0].style.overflowY
            = e.toState === 'show'
                ? 'hidden'
                : 'scroll';
    }

}
