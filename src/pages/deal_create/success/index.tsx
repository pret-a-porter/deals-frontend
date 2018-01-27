import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../components/button';
import { Section } from '../../../components/section';
import { IDeal } from '../../../models/deal';
import * as styles from './index.css';

export interface ICreateDealSuccessProps {
  deal: IDeal;
}

export class CreateDealSuccess extends React.PureComponent<ICreateDealSuccessProps, {}> {
  public render() {
    const { deal } = this.props;

    return (
      <Section title="Your deal confirmed!">
        <>
          <div className={styles['wrapper']}>
            <svg width="100px" height="100px" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="left-to-right">
                <stop offset="0" stopColor="#00D0A2">
                  <animate dur="0.5s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
                <stop offset="0" stopColor="rgba(0, 208, 162, 0.09)" stopOpacity="0.09">
                  <animate dur="0.5s" attributeName="offset" fill="freeze" from="0" to="1" />
                </stop>
              </linearGradient>
            </defs>

              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-101.000000, -295.000000)">
                  <g transform="translate(39.000000, 241.000000)">
                    <g transform="translate(66.000000, 58.000000)">
                      {/* tslint:disable-next-line:max-line-length */}
                      <polygon id="polygon" fill="url(#left-to-right)" fillRule="nonzero" points="66.8233244 27 38.1408459 55.6824785 25.1480118 42.6896444 20 47.8376563 38.1408459 65.9785022 71.9725582 32.1467899" />
                      <circle stroke="#00D0A2" strokeWidth="7" cx="46" cy="46" r="46" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span className={styles['value']}>
              USD {deal.value}
            </span>
          </div>
          <footer className={styles['footer']}>
            <Link to="/">
              <Button>Ok</Button>
            </Link>
          </footer>
        </>
      </Section>
    );
  }
}
