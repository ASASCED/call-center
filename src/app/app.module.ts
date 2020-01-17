import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { APP_ROUTING } from './router.routes';
import { CardComponent } from './components/main/card/card.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { CardsService } from './services/cards.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        CardComponent,
        FiltersComponent,
        SidebarComponent,
    ],
    imports: [BrowserModule, APP_ROUTING, HttpClientModule],
    providers: [CardsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
