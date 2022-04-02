import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { ReactComponent as AppleIcon } from '../../assets/apple.svg';
import Button from '../../components/Button/Button';
import s from './SignUpCTA.module.scss';
import { FC } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  withSeparator: boolean;
};

const SignUpCTA: FC<Props> = ({ title, subtitle, withSeparator }) => {
  return (
    <>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <Button auth>
        <GoogleIcon />
        <span>Sign up with Google</span>
      </Button>
      <Button auth>
        <AppleIcon />
        <span>Sign up with Apple</span>
      </Button>
      {withSeparator && <div className={s.cta__separator}>or</div>}
      <Button>Sign up with phone or email</Button>
      <p className={s.cta__agreement}>
        By signing up, you agree to the <a href="#twitter">Terms of Service</a>{' '}
        and <a href="#twitter">Privacy Policy</a>, including{' '}
        <a href="#twitter">Cookie Use</a>.
      </p>
    </>
  );
};

export default SignUpCTA;
