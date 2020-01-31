import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Cards } from '../../../interfaces/main-interfaces';
import { CardsService } from '../../../services/cards.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnChanges {
    @Input() cardInfo: Cards[];

    constructor(private cardsService: CardsService) {
        cardsService.getAppointments(1, 1, 20).then((data: Cards[]) => {
            this.cardInfo = data as Cards[];
        });
    }

    ngOnInit() {}

    ngOnChanges(): void {
        console.log(this.cardInfo);
    }
}
