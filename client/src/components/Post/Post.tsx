import { FC } from 'react';
import timean from 'timean';
import Avatar from '../Avatar/Avatar';
import s from './Post.module.scss';

const timeanConfig = {
  replacer: '%d',
  current: 'now',
  past: {
    second: 'now',
    minute: { singular: '%dm', plural: '%dm' },
    hour: { singular: '%dh', plural: '%dh' },
    day: '',
    month: '',
    year: '',
  },
};
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
type Props = TPost;

const Post: FC<Props> = ({
  author,
  content,
  timestamp,
  replied,
  retwitted,
  liked,
}) => {
  const date = new Date(timestamp);

  return (
    <article className={s.post}>
      <div>
        <Avatar size={5} src={author.image} alt={author.name} />
      </div>
      <div>
        <div className={s.post__header}>
          <div>{author.name}</div>
          <div>@{author.username}</div>
          <div>
            {timean.fromNow(date, timeanConfig) ||
              `${date.getDate() + 1} ${months[date.getMonth()]}`}
          </div>
        </div>
        <div className={s.post__body}>{content}</div>
        <div className={s.post__footer}>
          <div>{replied}</div>
          <div>{retwitted}</div>
          <div>{liked}</div>
        </div>
      </div>
    </article>
  );
};

export default Post;
