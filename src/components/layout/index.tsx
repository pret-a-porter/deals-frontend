import * as React from 'react';

import { Logo } from '../logo';
import * as styles from './index.css';

interface ILayoutProps {
  nav?: React.ReactNode;
}

export class Layout extends React.PureComponent<ILayoutProps, {}> {
  public render() {
    return (
      <>
        <header className={styles['header']}>
          <div className={styles['header-content']}>
            <Logo className={styles['header-logo']} />
            {this.props.nav}
          </div>
        </header>
        <main className={styles['main']}>
          {this.props.children}
        </main>
        <footer className={styles['footer']}>
          <div className={styles['footer-content']}>
            <Logo className={styles['footer-logo']} />
            © 2018. IBIT LTD. All rights reserved
          </div>
        </footer>
      </>
    );
  }
}
