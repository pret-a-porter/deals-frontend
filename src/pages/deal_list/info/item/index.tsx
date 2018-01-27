import * as React from 'react';

import { IDeal } from '../../../../models/deal';
import { getFormattedDate } from '../../../../utils';
import * as styles from './index.css';

export interface IDealInfoItemProps {
  deal: IDeal;

  deleteDeal(id: number): void;
}

export class DealInfoItem extends React.PureComponent<IDealInfoItemProps, {}> {
  public render() {
    const { deal } = this.props;

    return (
      <tr>
        <td>{deal.id}</td>
        <td>{getFormattedDate(deal.date)}</td>
        <td>{deal.value}</td>
        <td>
          <button className={styles['delete']} onClick={this.handleClickOnDeleteButton}>
            <svg width="14px" height="14px" viewBox="0 0 14 14">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-734.000000, -729.000000)" fill="#D0021B" fillRule="nonzero">
                  <g transform="translate(40.000000, 686.000000)">
                    <g transform="translate(0.000000, 28.000000)">
                      <g transform="translate(18.000000, 12.000000)">
                        <g>
                          <g transform="translate(676.000000, 3.000000)">
                            {/* tslint:disable-next-line:max-line-length */}
                            <polygon points="14 1.2726875 12.7273125 0 7 5.7273125 1.2726875 0 0 1.2726875 5.7273125 7 3.88578059e-16 12.7273125 1.2726875 14 7 8.2726875 12.7273125 14 14 12.7273125 8.2726875 7" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </td>
      </tr>
    );
  }

  private handleClickOnDeleteButton = () => {
    const {
      deal,
      deleteDeal,
    } = this.props;

    deleteDeal(deal.id);
  }
}
