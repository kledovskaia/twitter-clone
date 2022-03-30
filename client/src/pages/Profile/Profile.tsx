import Post from '../../components/Post/Post';
import ProfilePhoto from '../../assets/profilePhoto.jpg';

const post = {
  author: {
    name: 'Elon Musk',
    username: 'elonmusk',
    image: ProfilePhoto,
  },
  content:
    'SpaceX Falcon 🚀 team is making excellent progress – aiming for 60 launches this year!',
  replied: 1337,
  retwitted: 1984,
  liked: 128000,
  timestamp: new Date(2021).getTime(),
};

const Profile = () => {
  return <Post {...post} />;
};

export default Profile;
