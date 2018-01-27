import * as React from 'react';

import { getFormattedDate } from '../../utils';
import * as styles from './index.css';

interface ISectionProps {
  title: string;
}

export class Section extends React.PureComponent<ISectionProps> {
  public render() {
    return (
      <section className={styles['section']}>
        <header className={styles['header']}>
          <h1 className={styles['title']}>
            {this.props.title}
          </h1>
          {getFormattedDate(new Date())}
        </header>
        {this.props.children}
      </section>
    );
  }
}
