import { FC } from 'react';
import timean from 'timean';
import Avatar from '../Avatar/Avatar';
import s from './Post.module.scss';
import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import { ReactComponent as ReplyIcon } from '../../assets/reply.svg';
import { ReactComponent as RetweetIcon } from '../../assets/retweet.svg';
import { ReactComponent as LikeIcon } from '../../assets/like.svg';
import { ReactComponent as ShareIcon } from '../../assets/share.svg';
import Button from '../Button/Button';

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
      <div className={s.post__imageContainer}>
        <Avatar size={5} src={author.image} alt={author.name} />
      </div>
      <div className={s.post__contentContainer}>
        <header className={s.post__header}>
          <div>
            <p className={s.post__name}>{author.name}</p>
            <p className={s.post__username}>@{author.username}</p>
            <p className={s.post__time}>
              {timean.fromNow(date, timeanConfig) ||
                `${date.getDate() + 1} ${months[date.getMonth()]}`}
            </p>
          </div>
          <Button label="More" icon>
            <MoreIcon />
          </Button>
        </header>
        <div className={s.post__body}>{content}</div>
        <div className={s.post__footer}>
          <Button label="Reply" icon>
            <ReplyIcon />
            <span>{replied}</span>
          </Button>
          <Button label="Retweet" icon>
            <RetweetIcon />
            <span>{retwitted}</span>
          </Button>
          <Button label="Like" icon>
            <LikeIcon />
            <span>{liked > 1000 ? `${liked / 1000}K` : liked}</span>
          </Button>
          <Button label="Share" icon>
            <ShareIcon />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Post;
