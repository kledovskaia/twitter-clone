import Hero from '../../assets/login-hero.png';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { ReactComponent as AppleIcon } from '../../assets/apple.svg';
import Button from '../../components/Button/Button';
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
              <h2>Join Twitter today.</h2>
              <Button auth>
                <GoogleIcon />
                <span>Sign up with Google</span>
              </Button>
              <Button auth>
                <AppleIcon />
                <span>Sign up with Apple</span>
              </Button>
              <div className={s.login__separator}>or</div>
              <Button>Sign up with phone or email</Button>
              <p className={s.login__agreement}>
                By signing up, you agree to the{' '}
                <a href="#twitter">Terms of Service</a> and{' '}
                <a href="#twitter">Privacy Policy</a>, including{' '}
                <a href="#twitter">Cookie Use</a>.
              </p>
              <div className={s.login__alternative}>
                <h3>Already have an account?</h3>
                <Button outline>Sign in</Button>
              </div>
            </div>
          </div>
        </section>
        <div className={s.login__hero}>
          <img src={Hero} alt="" />
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
