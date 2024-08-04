import classNames from 'classnames/bind';
import { Container, NavigationMenu } from '../../components';
import styles from './Footer.module.scss';
import linkedin_icon from '../../assets/img/icon-linkedin.svg';
import github_icon from '../../assets/img/icon-github.svg';
import instagram_icon from '../../assets/img/icon-instagram.svg';
import email_icon from '../../assets/img/icon-email.svg';

let cx = classNames.bind(styles);

export default function Footer({ title, menuItems }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx('jb-footer')}>
      <div className="jb-footer__inner">
        <h3>Connect with me</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/jeffbasswebdev/"><img src={linkedin_icon} alt="Connect with me on LinkedIn"/></a></li>
          <li><a href="https://github.com/jeffbass9"><img src={github_icon} alt="Follow me on Github"/></a></li>
          <li><a href="https://www.instagram.com/jeffbass12/"><img src={instagram_icon} alt="Follow me on Instagram"/></a></li>
          <li><a href="mailto:jeffbass9@gmail.com"><img src={email_icon} alt="Email me at jeffbass9@gmail.com"/></a></li>
        </ul>
        <p className={cx('jb-footer__copyright')}>{`${title} © ${year}.`}</p>
      </div>
    </footer>
  );
}
