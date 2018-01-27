import * as React from 'react';

import { addDeal } from '../../../api';
import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { Section } from '../../../components/section';
import { IDeal } from '../../../models/deal';
import { getFormattedDate } from '../../../utils';
import * as styles from './index.css';

interface ICreateDealFormProps {
  onSubmit(newDeal: IDeal): void;
}

interface ICreateDealFormState {
  date: Date;
  errorMessage?: string;
  value: string;
}

export class CreateDealForm extends React.PureComponent<ICreateDealFormProps, ICreateDealFormState> {
  public state: ICreateDealFormState = {
    date: new Date(),
    value: '',
  };

  public render() {
    const {
      errorMessage,
    } = this.state;

    return (
      <Section title="New deal">
        <form className={styles['form']} onSubmit={this.handleSubmit}>
          {errorMessage &&
            <div className={styles['error']}>
              Error! {errorMessage}
            </div>
          }
          <label className={styles['label']}>
            Current date
            <Input
              disabled
              className={styles['input']}
              value={getFormattedDate(this.state.date, true)}
            />
          </label>
          <label className={styles['label']}>
            Value
            <Input
              leftSideContent={<span className={styles['prefix']}>usd</span>}
              onChange={this.handleChangeValue}
              className={styles['input']}
              value={this.state.value}
            />
          </label>
          <Button className={styles['submit']} type="submit">
            New Deal
          </Button>
        </form>
      </Section>
    );
  }

  private handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  }

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const {
      date,
      value,
    } = this.state;
    e.preventDefault();

    addDeal(Number(value), date.toISOString())
    .then(newDeal => {
      this.props.onSubmit(newDeal);
    })
    .catch(error => {
      this.setState({
        errorMessage: error.response.data.error,
      });
    });
  }
}
