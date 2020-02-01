import { Injectable } from '@angular/core';
import axios from 'axios';
import { Cards, Quote } from '../interfaces/main-interfaces';

@Injectable({
    providedIn: 'root',
})
export class CardsService {
    private URL = 'http://localhost:59692/';
    infoCard: Cards;

    constructor() {}

    async postAppointment(postObject) {
        try {
            const res = await axios.post(`${this.URL}Appointmets`, postObject);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async putAppointment(id, putObject) {
        try {
            const res = await axios.post(
                `${this.URL}Appointmets/${id}`,
                putObject
            );
            return res;
        } catch (error) {
            throw error;
        }
    }

    async getAppointments(idLogin, offset, limit): Promise<Cards[]> {
        try {
            const res = await axios.get(
                `${this.URL}Appointments?idLogin=${idLogin}&offset=${offset}&limit=${limit}`
            );
            return res.data as Cards[];
        } catch (error) {
            throw error;
        }
    }

    async getOffices(): Promise<Cards[]> {
        try {
            const res = await axios.get(`${this.URL}Offices`);
            return res.data as Cards[];
        } catch (error) {
            throw error;
        }
    }

    async getTypes(): Promise<Cards[]> {
        try {
            const res = await axios.get(`${this.URL}StatusAppointments/Types`);
            return res.data as Cards[];
        } catch (error) {
            throw error;
        }
    }

    async getStatus(): Promise<Cards[]> {
        try {
            const res = await axios.get(
                `${this.URL}StatusAppointments/Login/1`
            );
            return res.data as Cards[];
        } catch (error) {
            throw error;
        }
    }

    async getLanguages(): Promise<Cards[]> {
        try {
            const res = await axios.get(`${this.URL}Languages`);
            return res.data as Cards[];
        } catch (error) {
            throw error;
        }
    }

    async getQuoteInfo(quote: string): Promise<Quote> {
        try {
            console.log(String(quote));
            const res = await axios.get(
                `${this.URL}ITC/Quote/${String(quote)}`
            );
            return res.data as Quote;
        } catch (error) {
            throw error;
        }
    }

    setInfoCard(infoCard: Cards) {
        this.infoCard = infoCard;
    }

    getInfoCard(): Cards {
        return this.infoCard;
    }
}
