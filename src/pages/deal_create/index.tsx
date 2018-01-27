import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/button';
import { Layout } from '../../components/layout';
import { IDeal } from '../../models/deal';
import { CreateDealForm } from './form';
import * as styles from './index.css';
import { CreateDealSuccess } from './success';

interface IDealCreateState {
  newDeal: IDeal | null;
}

export class DealCreate extends React.PureComponent<{}, IDealCreateState> {
  public state = {
    newDeal: null,
  };

  public render() {
    const { newDeal } = this.state;

    return (
      <Layout nav={<Link to="/"><Button className={styles['back']}>Back</Button></Link>}>
        {
          newDeal
          ? <CreateDealSuccess deal={newDeal} />
          : <CreateDealForm onSubmit={this.handleSubmit} />
        }
      </Layout>
    );
  }

  private handleSubmit = (newDeal: IDeal) => {
    this.setState({ newDeal });
  }
}
