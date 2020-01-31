import { Injectable } from '@angular/core';
import axios from 'axios';
import { Cards } from '../interfaces/main-interfaces';

@Injectable({
    providedIn: 'root',
})
export class CardsService {
    private URL = 'http://localhost:59692/';
    private APPOINTMENTS: Cards[];

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

    async getOffices() {
        try {
            const res = await axios.get(`${this.URL}Offices`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    async getTypes() {
        try {
            const res = await axios.get(`${this.URL}StatusAppointments/Types`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    async getStatus() {
        try {
            const res = await axios.get(
                `${this.URL}StatusAppointments/Login/1`
            );
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    async getLanguages() {
        try {
            const res = await axios.get(`${this.URL}Languages`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }

    async getQuoteInfo(quote: string) {
        try {
            const res = await axios.get(`${this.URL}ITC/Quote/${quote}`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
}
