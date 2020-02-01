import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Quote } from '../../../interfaces/main-interfaces';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
    types: any[];
    offices: any[];
    status: any[];
    languages: any[];
    quoteInfo: Quote;

    constructor(private cardsService: CardsService) {
        this.cardsService.getOffices().then(data => {
            this.offices = data;
        });

        this.cardsService.getTypes().then(data => {
            this.types = data;
        });

        this.cardsService.getStatus().then(data => {
            this.status = data;
        });

        this.cardsService.getLanguages().then(data => {
            this.languages = data;
        });
    }

    getQuote(quote: string) {
        this.cardsService
            .getQuoteInfo(quote)
            .then((data: Quote) => {
                this.quoteInfo = data;
                console.log(this.quoteInfo);
            })
            .catch(err => {
                console.log('Surgio un error en la peticion del quote', err);
            });
    }

    ngOnInit() {}
}
