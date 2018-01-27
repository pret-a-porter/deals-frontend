import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './index.css';

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  leftSideContent?: React.ReactNode;
}

export class Input extends React.PureComponent<IInputProps, {}> {
  public render() {
    const {
      className,
      leftSideContent,
      ...sharedProps,
    } = this.props;

    return (
      <div className={styles['wrapper']}>
        {leftSideContent}
        <input
          {...sharedProps}
          className={classnames(styles['input'], className)}
        />
      </div>
    );
  }
}
