import classNames from 'classnames';
import { FC } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Recommendations from '../../components/Recommendations/Recommendations';
import s from './Page.module.scss';

const Page: FC = ({ children }) => {
  return (
    <div className={s.page}>
      <div className={classNames(s.page__sidebar, s.page__sidebar_left)}>
        <Navigation />
      </div>
      <main className={s.page__main}>
        <Header />
        {children}
      </main>
      <div className={classNames(s.page__sidebar, s.page__sidebar_left)}>
        <Recommendations />
      </div>
    </div>
  );
};

export default Page;
