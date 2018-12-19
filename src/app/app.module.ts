import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
