import * as classnames from 'classnames';
import * as React from 'react';
import * as styles from './index.css';

// tslint:disable-next-line:max-line-length
interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export class Button extends React.PureComponent<IButtonProps, {}> {
  public render() {
    const {
      children,
      className,
      ...sharedProps,
    } = this.props;

    return (
      <button
        {...sharedProps}
        className={classnames(styles['button'], className)}
      >
        {children}
      </button>
    );
  }
}
