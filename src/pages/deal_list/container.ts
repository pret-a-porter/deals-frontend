import { connect, Dispatch } from 'react-redux';

import { DealList, IDealListProps } from '.';
import { IAppState } from '../../store';
import { fetchDeals } from '../../store/deals';

type TStateProps = Pick<IDealListProps, 'deals'>;
type TDispatchProps = Pick<IDealListProps, 'fetchDeals'>;

function mapStateToProps(state: IAppState): TStateProps {
  return {
    deals: state.deals.list,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>): TDispatchProps {
  return {
    fetchDeals: () => dispatch(fetchDeals()),
  };
}

export const DealListContainer = connect<TStateProps, TDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(DealList);
