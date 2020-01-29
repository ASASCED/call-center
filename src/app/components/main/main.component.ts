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
    buttonAdd = false;

    constructor(private cardsService: CardsService) {
        cardsService.getAppointments().subscribe((cardsInfo: any) => {
            console.log(cardsInfo);
            this.cardsInfo = cardsInfo;
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
