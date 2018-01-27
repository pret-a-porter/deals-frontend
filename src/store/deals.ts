import { IThunkActionCreator } from '.';
import * as api from '../api';
import { IDeal } from '../models/deal';

export interface IDealsState {
  list: IDeal[];
}

interface IDealsRequestedAction {
  type: 'IDealsRequestedAction';
}

interface IDealDeletedAction {
  id: number;
  type: 'IDealDeletedAction';
}

interface IDealsReceivedAction {
  deals: IDeal[];
  type: 'IDealsReceivedAction';
}

type TActions =
IDealDeletedAction |
IDealsReceivedAction |
IDealsRequestedAction;

function prepareDealsForStore(deals: IDeal[]) {
  return deals.map(deal => ({
    ...deal,
    date: new Date(deal.date),
  }));
}

export function fetchDeals(): IThunkActionCreator {
  return (dispatch, getState, context) => {
    api.getDeals()
    .then(deals => {
      dispatch({
        deals: prepareDealsForStore(deals),
        type: 'IDealsReceivedAction',
      });
    });
  };
}

export function deleteDeal(id: number): IThunkActionCreator {
  return (dispatch, getState, context) => {
    api.deleteDeal(id)
    .then(() => {
      dispatch({
        id,
        type: 'IDealDeletedAction',
      });
    });
  };
}

const defaultState: IDealsState = {
  list: [],
};

export function dealsReducer(
  state: IDealsState = defaultState,
  action: TActions,
): IDealsState {
  switch (action.type) {
    case 'IDealsReceivedAction':
      return {
        ...state,
        list: action.deals,
      };

    case 'IDealDeletedAction':
      return {
        ...state,
        list: state.list.filter(({id}) => id !== action.id),
      };

    default:
      return state;
  }
}
