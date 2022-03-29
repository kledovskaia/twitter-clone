import Hero from '../../assets/login-hero.png';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import Button from '../../components/Button/Button';
import s from './Login.module.scss';

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
              <Button auth>Sign up with Google</Button>
              <Button auth>Sign up with Apple</Button>
              <div>or</div>
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
      <footer className={s.login__footer}></footer>
    </div>
  );
};

export default Login;
