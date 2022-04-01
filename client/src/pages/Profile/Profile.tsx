import Post from '../../components/Post/Post';
import ProfilePhoto from '../../assets/profilePhoto.jpg';
import ProfileHero from '../../assets/profileHero.jpeg';
import s from './Profile.module.scss';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import { months } from '../../constants/months';
import { ReactComponent as CalendarLogo } from '../../assets/calendar.svg';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

const post = {
  author: {
    name: 'Elon Musk',
    username: 'elonmusk',
    image: ProfilePhoto,
  },
  content:
    'SpaceX Falcon 🚀 team is making excellent progress – aiming for 60 launches this year!\n',
  replied: 1337,
  retwitted: 1984,
  liked: 128000,
  timestamp: new Date(2021).getTime(),
};

const profile = {
  name: 'Elon Musk',
  username: 'elonmusk',
  image: ProfilePhoto,
  hero: ProfileHero,
  createdAt: new Date(2009, 5).getTime(),
  followingCount: 112,
  followersCount: 79700000,
};

const links = [
  { anchor: 'Tweets', path: '' },
  { anchor: 'Tweets & replies', path: 'with-replies' },
  { anchor: 'Media', path: 'media' },
  { anchor: 'Likes', path: 'likes' },
];

const Profile = () => {
  const posts = new Array(10).fill(post);
  return (
    <section className={s.profile}>
      <header>
        <img
          className={s.profile__hero}
          src={profile.hero}
          alt={profile.name}
        />
        <ProfileInfo {...profile} />
      </header>
      <nav className={s.profile__navigation}>
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              classNames(
                s.profile__link,
                isActive ? s.profile__link_active : undefined
              )
            }
            to={`/${profile.username}/${link.path}`}
          >
            <span>{link.anchor}</span>
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route
          path=""
          element={
            <section>
              {posts.map((post, i) => (
                <Post key={i} {...post} />
              ))}
            </section>
          }
        />
        <Route path="with-replies" element={<div>with replies</div>} />
        <Route path="media" element={<div>media</div>} />
        <Route path="likes" element={<div>likes</div>} />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </section>
  );
};

export default Profile;
