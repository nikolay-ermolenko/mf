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
            .pipe(
                map((e: any) => e.target),
                debounceTime(100)
            )
            .subscribe((t: any) => {
                if (t.scrollHeight - t.scrollTop < t.clientHeight * 1.5) {
                    this.someEvent.emit(77);
                }
            });
    }
}
