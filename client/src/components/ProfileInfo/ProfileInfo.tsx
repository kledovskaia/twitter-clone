import { FC } from 'react';
import { months } from '../../constants/months';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { ReactComponent as CalendarLogo } from '../../assets/calendar.svg';
import s from './ProfileInfo.module.scss';
import classNames from 'classnames';

enum modificators {
  preview,
}

type Props = TUser & {
  [key in keyof typeof modificators]?: boolean;
};

const ProfileInfo: FC<Props> = ({
  preview,
  name,
  username,
  image,
  createdAt,
  followingCount,
  followersCount,
}) => {
  return (
    <section
      className={classNames(s.profileInfo, {
        [s.profileInfo_preview]: preview,
      })}
    >
      <div className={s.profileInfo__header}>
        <Avatar
          className={s.profileInfo__photo}
          size={preview ? 7 : 14}
          src={image}
          alt={name}
        />
        <Button dark>Follow</Button>
      </div>
      <div className={s.profileInfo__body}>
        <h2>{name}</h2>
        <p className={s.profileInfo__username}>@{username}</p>
        <p className={s.profileInfo__joined}>
          <CalendarLogo />
          <span>
            Joined {months.long[new Date(createdAt).getMonth()]}{' '}
            {new Date(createdAt).getFullYear()}
          </span>
        </p>
        <div className={s.profileInfo__statisticContainer}>
          <p className={s.profileInfo__statistic}>
            <span>{followingCount}</span>
            <span>Following</span>
          </p>
          <p className={s.profileInfo__statistic}>
            <span>{followersCount}</span>
            <span>Followers</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
