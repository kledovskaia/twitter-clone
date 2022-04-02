import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
import { ReactComponent as ExploreIcon } from '../../assets/search.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as MessageIcon } from '../../assets/message.svg';
import { ReactComponent as ListIcon } from '../../assets/list.svg';
import s from './Navigation.module.scss';

const links = {
  signedIn: [
    { path: '/home', anchor: 'Home', icon: <HomeIcon /> },
    { path: '/explore', anchor: 'Explore', icon: <ExploreIcon /> },
    {
      path: '/notifications',
      anchor: 'Notifications',
      icon: <NotificationIcon />,
    },
    { path: '/messages', anchor: 'Messages', icon: <MessageIcon /> },
    { path: '/bookmarks', anchor: 'Bookmarks', icon: <BookmarkIcon /> },
    { path: '/lists', anchor: 'Lists', icon: <ListIcon /> },
  ],
  signedOut: [{ path: '/explore', anchor: 'Explore', icon: <ExploreIcon /> }],
};

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        {links.signedIn.map((link) => (
          <li>
            <Link to={link.path}>
              {link.icon}
              <span>{link.anchor}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
