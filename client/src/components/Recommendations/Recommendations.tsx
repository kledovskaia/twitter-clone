import SignUpCTA from '../SignUpCTA/SignUpCTA';
import s from './Recommendations.module.scss';

const Recommendations = () => {
  const isLoggedIn = false;

  return (
    <aside className={s.recommendations}>
      {!isLoggedIn && (
        <div className={s.recommendations__box}>
          <SignUpCTA
            title="New to Twitter?"
            subtitle="Sign up now to get your own personalized timeline!"
          />
        </div>
      )}
    </aside>
  );
};

export default Recommendations;
