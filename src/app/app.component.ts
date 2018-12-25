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

    public listShowed: boolean = false;

    public ngOnInit(): void {
        this.objContent = this._generate(0);
    }

    public expand(item: string): void {
        if (item === null || item === this._currentMenu) {
            this._currentMenu = null;
            this.animationState = 'hide';
        } else {
            this._currentMenu = item;
            this.animationState = 'show'
            this.currentMenuIndex = ['main', 'user', 'starred'].indexOf(item);
        }
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

    public selectedTabChange(e: any): void {
        // if(e.index === 1) {
        //     this.listShowed = true;
        // }
    }

    public appInfiniteScroller(e: any): void {
        this.objContent = this.objContent.concat(this._generate(this.objContent.length));
    }


    private _generate(lastId: number): any[] {
        const loremIpsum: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        const loremIpsumWords: string[] = loremIpsum
            .replace(/[,\.]/g, '')
            .split(' ')
            .filter(w => w.trim() !== '');

        return Array
            .from({ length: 25 }, (v, k) => {
                return {
                    id: lastId + k + 1,
                    title: Array.from({ length: 1 + +(Math.random() * 7).toFixed() }, () => 
                        loremIpsumWords[1+ +(Math.random() * (loremIpsumWords.length - 1)).toFixed()]).join(' '),
                    subtitle: Array.from({ length: 9 + +(Math.random() * 24).toFixed() }, () => 
                        loremIpsumWords[1+ +(Math.random() * (loremIpsumWords.length - 1)).toFixed()]).join(' '),
                    text: Array.from({ length: 1 + +(Math.random() * 4).toFixed() }, () => loremIpsum).join(' '),
                    imgWidth: 80 + +(Math.random() * 100).toFixed(),
                    imgHeight: 10 + +(Math.random() * 100).toFixed(),
                    avatarWidth: 1 + +(Math.random() * 100).toFixed(),
                    avatarHeight: 1 + +(Math.random() * 100).toFixed()
                };
            });

    }
}
