import { FC } from 'react';
import s from './Avatar.module.scss';

type Props = {
  src: TUser['image'];
  alt: TUser['name'];
  size: number;
};

const Avatar: FC<Props> = ({ src, alt, size }) => {
  return (
    <img
      className={s.avatar}
      style={{
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
