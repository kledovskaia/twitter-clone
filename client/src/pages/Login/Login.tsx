import Hero from '../../assets/login-hero.png';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import Button from '../../components/Button/Button';
import SignUpCTA from '../../components/SignUpCTA/SignUpCTA';
import s from './Login.module.scss';

const footerListItems = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Accessibility',
  'Ads info',
  'Blog',
  'Status',
  'Careers',
  'Brand Resources',
  'Advertising',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
];

const Login = () => {
  return (
    <div className={s.login}>
      <div className={s.login__main}>
        <section className={s.login__content}>
          <div className={s.login__contentContainer}>
            <TwitterIcon />
            <h1>Happening now</h1>
            <div className={s.login__providers}>
              <SignUpCTA
                title="Join Twitter today."
                subtitle=""
                withSeparator
              />

              <div className={s.login__alternative}>
                <h3>Already have an account?</h3>
                <Button outline>Sign in</Button>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{ backgroundImage: `url('${Hero}')` }}
          className={s.login__hero}
        >
          <TwitterIcon />
        </div>
      </div>
      <footer className={s.login__footer}>
        <ul>
          {footerListItems.map((item) => (
            <li key={item}>
              <a href="#twitter">{item}</a>
            </li>
          ))}
          <li>© 2022 Twitter, Inc.</li>
        </ul>
      </footer>
    </div>
  );
};

export default Login;
