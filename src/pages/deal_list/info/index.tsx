import * as React from 'react';
import { IDeal } from '../../../models/deal';

import * as styles from './index.css';
import { DealInfoItemContainer } from './item/container';

export interface IDealsInfoProps {
  deals: IDeal[];
}

export class DealsInfo extends React.PureComponent<IDealsInfoProps, {}> {
  public render() {
    const { deals } = this.props;

    return (
      <section className={styles['wrapper']}>
        <header className={styles['header']}>
          <h2 className={styles['title']}>
            Deals info
          </h2>
          <span className={styles['count']}>
            {`Total: ${deals.length} deals`}
          </span>
        </header>
        <table
          className={styles['table']}
          cellSpacing="0"
          cellPadding="0"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Value</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.deals.map(deal =>
              <DealInfoItemContainer key={deal.id} deal={deal} />)}
          </tbody>
        </table>
      </section>
    );
  }
}
