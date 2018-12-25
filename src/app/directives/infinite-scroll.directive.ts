import { Directive, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
@Directive({
    selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective implements AfterViewInit {

    private _scrollEvent$: Observable<any>;

    private _isRequest: boolean = false;

    @Output('onInfiniteScrollerTrashHold')
    public someEvent: EventEmitter<any> = new EventEmitter();

    constructor(
        private _elm: ElementRef
    ) { }

    public ngAfterViewInit(): void {
        this._scrollEvent$ = fromEvent(this._elm.nativeElement, 'scroll');

        this._scrollEvent$
        .pipe (
            map((e:any) => e.target),
            debounceTime(550)
        )
        .subscribe((t: any) => {
            
            if (/*!this._isRequest && */(t.scrollHeight * .8) < t.scrollTop) {
                console.log(88, t.scrollHeight, t.scrollTop);

                this.someEvent.emit(77);
                // this._isRequest = true;
            }

        });
    }
}
