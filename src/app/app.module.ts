import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatBadgeModule,
    MatDividerModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IconMenuComponent, IconListComponent } from './entities/icons';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import { InfiniteScrollerDirective } from './directives/infinite-scroll.directive';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatBadgeModule,
        MatDividerModule,
        ScrollingModule,
        ExperimentalScrollingModule
    ],
    providers: [
        {
            provide: LOCALE_ID, 
            useValue: 'ru'
        }
    ],
    declarations: [
        AppComponent,
        IconMenuComponent,
        IconListComponent,
        InfiniteScrollerDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
