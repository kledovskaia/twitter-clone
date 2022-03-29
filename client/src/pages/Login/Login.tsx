import Hero from '../../assets/login-hero.png';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

const Login = () => {
  return (
    <div className="login">
      <div className="login__main">
        <section className="login__content">
          <TwitterIcon />
          <h1>
            <span>Happening now</span>
            <span>Join Twitter today.</span>
          </h1>
          <div className="login__providers">
            <button>Sign up with Google</button>
            <button>Sign up with Apple</button>
            <div>or</div>
            <button>Sign up with phone or email</button>
          </div>
          <p className="login__agreement">
            By signing up, you agree to the{' '}
            <a href="#twitter">Terms of Service</a> and{' '}
            <a href="#twitter">Privacy Policy</a>, including{' '}
            <a href="#twitter">Cookie Use</a>.
          </p>
          <div className="login__alternative">
            <h2>Already have an account?</h2>
            <button>Sign in</button>
          </div>
        </section>
        <div className="login__hero">
          <img src={Hero} alt="" />
          <TwitterIcon />
        </div>
      </div>
      <footer className="login__footer"></footer>
    </div>
  );
};

export default Login;
