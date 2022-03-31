import Post from '../../components/Post/Post';
import ProfilePhoto from '../../assets/profilePhoto.jpg';
import ProfileHero from '../../assets/profileHero.jpeg';
import s from './Profile.module.scss';
import Avatar from '../../components/Avatar/Avatar';

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
};

const Profile = () => {
  const posts = new Array(10).fill(post);

  return (
    <section className={s.profile}>
      <header>
        <div
          style={{ backgroundImage: profile.hero }}
          className={s.profile__hero}
        />
        <div className={s.profile__info}>
          <Avatar size={12} src={profile.image} alt={profile.name} />
        </div>
      </header>
      <section>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </section>
    </section>
  );
};

export default Profile;
