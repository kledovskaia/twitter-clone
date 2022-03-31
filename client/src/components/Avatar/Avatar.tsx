import classNames from 'classnames';
import { FC } from 'react';
import s from './Avatar.module.scss';

type Props = {
  src: TUser['image'];
  alt: TUser['name'];
  size: number;
  className?: string;
};

const Avatar: FC<Props> = ({ src, alt, size, className }) => {
  return (
    <img
      style={{
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      className={classNames(s.avatar, className)}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
