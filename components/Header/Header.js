import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu, SkipNavigationLink } from '../../components';
import styles from './Header.module.scss';
import jeff_bass_resume from '../../assets/img/jeff-bass-resume-2024.pdf';

let cx = classNames.bind(styles);

export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cx('jb-header')}>
      {/* <SkipNavigationLink /> */}
          <div className={cx('navbar')}>
            <div className={cx('brand')}>
              <Link href="/">
                <a className={cx('title')}>{title}</a>
              </Link>
              {description && <p className={cx('description')}>{description}</p>}
            </div>
            <button
              type="button"
              className={cx('nav-toggle')}
              onClick={() => setIsNavShown(!isNavShown)}
              aria-label="Toggle navigation"
              aria-controls={cx('primary-navigation')}
              aria-expanded={isNavShown}
            >
              ☰
            </button>
            <NavigationMenu
              className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
              menuItems={menuItems}
            />
        </div>
        <div className={cx('jb-bio')}>
          <div className={cx('jb-bio__text')}>
            <h1>Jeff Bass</h1>
            <h2>React / Wordpress / ASP.Net</h2>
            <p>I am a self-motivated web developer, musician, and filmmaker  with a passion for learning.</p>
            <p>Keeping up with the latest
            standards and trends, I love working with Wordpress, creating new design
            components across a variety of frameworks, improving browser performance
            and accessibility, and troubleshooting complex issues. </p>
            <div className={cx('jb-bio__buttons')}>
              <a href={jeff_bass_resume} className={cx('jb-button')}>Resume</a>
              <a href="mailto:jeffbass9@gmail.com" className={cx('jb-button')}>Contact</a>
            </div>
          </div>
        </div>
    </header>
  );
}
