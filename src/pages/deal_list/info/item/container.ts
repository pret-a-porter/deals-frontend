import { connect, Dispatch } from 'react-redux';

import { DealInfoItem, IDealInfoItemProps } from '.';
import { IAppState } from '../../../../store';
import { deleteDeal } from '../../../../store/deals';

type TDispatchProps = Pick<IDealInfoItemProps, 'deleteDeal'>;
type TOwnProps = Pick<IDealInfoItemProps, 'deal'>;

function mapDispatchToProps(dispatch: Dispatch<IAppState>): TDispatchProps {
  return {
    deleteDeal: (id: number) => dispatch(deleteDeal(id)),
  };
}

export const DealInfoItemContainer = connect<{}, TDispatchProps, TOwnProps>(
  () => ({}),
  mapDispatchToProps,
)(DealInfoItem);
