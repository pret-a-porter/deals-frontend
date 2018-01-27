import axios from 'axios';

import { IDeal } from '../models/deal';

export interface IServerError {
  error: string;
}

interface IGetDealsResponse {
  deals: IDeal[];
}

interface IAddDealResponse {
  deal: IDeal;
}

export function getDeals(): Promise<IDeal[]> {
  return axios.get<IGetDealsResponse>(`/api/deals?date=${(new Date()).toISOString()}`)
  .then(response => {
    return response.data.deals;
  });
}

export function deleteDeal(id: number) {
  return axios.delete(`/api/deal/${id}`);
}

export function addDeal(value: number, date: string): Promise<IDeal> {
  return axios.put<IAddDealResponse>('/api/deal', { date, value })
  .then(response => {
    return response.data.deal;
  });
}
