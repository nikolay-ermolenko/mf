import { Component, ChangeDetectionStrategy, Input, HostBinding, Output, EventEmitter, } from '@angular/core';
import {
    toggleMainMenu,
    toggleMainMenuMask,
    // toggleMainMenuContainerBody
} from './main-menu.animations';

@Component({
    selector: 'mf-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    animations: [
        toggleMainMenu,
        toggleMainMenuMask,
        // toggleMainMenuContainerBody
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {

    private _position: string = 'center';

    private _expanded: boolean = false;

    public positionClass: string = 'menu-no-position';

    @HostBinding('class.menu-center')
    public isCenterPosition: boolean = false;

    @Input()
    public set position(position: string) {
        this.isCenterPosition = position === 'center';
        this._position = position;
        this.positionClass = `menu-position-${position}`;
    };
    @Input()
    public get expanded() {
        return this._expanded;
    };
    @Input()
    public percentageExpand: number;
    @Input()
    public delayExpand: number;
    @Input()
    public delayCollapse: number;
    @Input()
    public minWidth: number;
    @Input()
    public maxWidth: number;
    @Input()
    public minExpand: number;
    @Input()
    public maxExpand: number;
    @Input()
    public maskOpacity: number;
    @Input()
    public allowMask: boolean = true;
    @Input()
    public hidden: boolean = false;
    @Output()
    public expandedChange: EventEmitter<boolean> = new EventEmitter();

    public set expanded(value: boolean) {
        this._expanded = value;
        this.expandedChange.emit(this._expanded);
    }

    public toggleExpanded(expanded: boolean): void {
        if (typeof expanded !== 'undefined') {
            this._expanded = Boolean(expanded);
        } else {
            this._expanded = !this._expanded;
        }
        this.expandedChange.emit(this._expanded);
    }

    public getMenuClass(): string {
        return `main-menu ${this.positionClass}`;
    }

    public getAnimationState(): any {
        return {
            value: `${this.expanded ? 'expanded' : 'collapsed'}-${this._position}`,
            params: {
                percentageExpand: this.percentageExpand,
                delayExpand: this.delayExpand,
                delayCollapse: this.delayCollapse,
                minWidth: this.minWidth,
                maxWidth: this.maxWidth,
                minExpand: this.minExpand,
                maxExpand: this.maxExpand,
                hidden: this.hidden ? 'none' : 'inherit'
            }
        };
    }

    public getMaskAnimationState(): any {
        return {
            value: this.expanded ? 'show' : 'hide',
            params: {
                delayExpand: this.delayExpand,
                delayCollapse: this.delayCollapse,
                maskOpacity: this.maskOpacity
            }
        };
    }
}
