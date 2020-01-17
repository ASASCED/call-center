import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CardsService {
    private url = 'http://localhost:59692/';

    constructor(private httpClient: HttpClient) {}

    getAppointments() {
        return this.httpClient.get(
            `${this.url}Appointments/OfficeLogin?idoffice=40`
        );
    }
}
