import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Cards } from '../../interfaces/main-interfaces';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
    cardsInfo: Cards[];
    cardInfo: Cards;
    buttonAdd = true;

    constructor(private cardsService: CardsService) {
        cardsService.getAppointments(1, 1, 20).then(data => {
            this.cardsInfo = data;
        });
    }

    ngOnInit() {}

    getCardSelected(event: Cards) {
        this.cardInfo = event;
    }

    buttonChangeAdd(): void {
        this.buttonAdd = !this.buttonAdd;
    }
}
