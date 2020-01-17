import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cards } from '../../../interfaces/main-interfaces';
import { CardsService } from '../../../services/cards.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input() cardInfo: Cards;

    constructor(private cardsService: CardsService) {
        cardsService.getAppointments().subscribe((cards: Cards[]) => {
            this.cardInfo = cards[0];
        });
    }

    ngOnInit() {}

    ngOnChanges(): void {
        console.log(this.cardInfo);
    }
}
