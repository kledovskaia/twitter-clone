import { FC, ReactNode } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames';

enum modificators {
  outline,
  auth,
}

type Props = {
  [key in keyof typeof modificators]?: boolean;
} & {
  children: ReactNode;
  onClick?: (...arg: any[]) => void;
};

const Button: FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        s.button,
        Object.fromEntries(
          Object.keys(modificators).map((key) => [
            s[`button_${key}`],
            props[key as keyof typeof props],
          ])
        )
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
