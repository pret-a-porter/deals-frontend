import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/button';
import { Layout } from '../../components/layout';
import { IDeal } from '../../models/deal';
import { DealListChart } from './chart';
import { DealsInfo } from './info';

export interface IDealListProps {
  deals: IDeal[];

  fetchDeals(): void;
}

export class DealList extends React.PureComponent<IDealListProps, {}> {
  public componentDidMount() {
    this.props.fetchDeals();
  }

  public render() {
    const { deals } = this.props;

    return (
      <Layout nav={<Link to="/create"><Button>New Deal</Button></Link>}>
        <DealListChart deals={deals} />
        <DealsInfo deals={deals} />
      </Layout>
    );
  }
}
