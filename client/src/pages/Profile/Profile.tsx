import Post from '../../components/Post/Post';
import ProfilePhoto from '../../assets/profilePhoto.jpg';
import ProfileHero from '../../assets/profileHero.jpeg';
import s from './Profile.module.scss';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import { months } from '../../constants/months';
import { ReactComponent as CalendarLogo } from '../../assets/calendar.svg';
import { Link, Route, Routes } from 'react-router-dom';

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
        <div className={s.profile__content}>
          <div className={s.profile__contentHeader}>
            <Avatar
              className={s.profile__photo}
              size={14}
              src={profile.image}
              alt={profile.name}
            />
            <Button dark>Follow</Button>
          </div>
          <div className={s.profile__info}>
            <h2>{profile.name}</h2>
            <p className={s.profile__username}>@{profile.username}</p>
            <p className={s.profile__joined}>
              <CalendarLogo />
              <span>
                Joined {months.long[new Date(profile.createdAt).getMonth()]}{' '}
                {new Date(profile.createdAt).getFullYear()}
              </span>
            </p>
            <div className={s.profile__statisticContainer}>
              <p className={s.profile__statistic}>
                <span>{profile.followingCount}</span>
                <span>Following</span>
              </p>
              <p className={s.profile__statistic}>
                <span>{profile.followersCount}</span>
                <span>Followers</span>
              </p>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <Link to={`/${profile.username}/`} />
        <Link to={`/${profile.username}/with-replies`} />
        <Link to={`/${profile.username}/media`} />
        <Link to={`/${profile.username}/likes`} />
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
      </Routes>
    </section>
  );
};

export default Profile;
