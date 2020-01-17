import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards } from '../../../interfaces/main-interfaces';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
    @Input() card: Cards;
    @Output() infoCard: EventEmitter<Cards>;

    constructor() {
        this.infoCard = new EventEmitter();
    }

    ngOnInit() {}

    cardSelected() {
        this.infoCard.emit(this.card);
    }
}
