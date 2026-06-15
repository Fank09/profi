import {
  BookOpenTextIcon,
  FileTextIcon,
  GlobeSimple,
  List,
  NutIcon,
  SignOut,
  Sparkle,
  SquaresFour,
  User,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { LogoProfi } from '../logo-profi';
import { SideMenuLink } from '../side-menu-link';

const links = [
  { title: 'Dashboard', active: true, icon: SquaresFour },
  { title: 'Profile', icon: User, chipLabel: '59%', chipTone: 'purple' },
  { title: 'AI Interview', icon: Sparkle },
  { title: 'Assessments', icon: BookOpenTextIcon, chipLabel: 'Soon' },
  { title: 'Profile Views', icon: FileTextIcon, chipLabel: 'Soon' },
  { title: 'Account Setting', icon: NutIcon },
];

export function SideMenu({
  profileActive = false,
  accountSettingActive = false,
  onDashboardClick,
  onProfileClick,
  onAccountSettingClick,
}) {
  const [activeLanguage, setActiveLanguage] = useState('TH');

  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebar__top">
        <button className="menu-button" type="button" aria-label="Collapse menu">
          <List size={24} weight="regular" />
        </button>
        <LogoProfi />
      </div>

      <nav className="sidebar__nav" aria-label="Dashboard navigation">
        {links.map((link) => (
          <SideMenuLink
            key={link.title}
            {...link}
            active={
              link.title === 'Profile'
                ? profileActive
                : link.title === 'Account Setting'
                  ? accountSettingActive
                  : link.title === 'Dashboard' && !profileActive && !accountSettingActive
            }
            onClick={
              link.title === 'Dashboard'
                ? onDashboardClick
                : link.title === 'Profile'
                  ? onProfileClick
                  : link.title === 'Account Setting'
                    ? onAccountSettingClick
                    : undefined
            }
          />
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="language-switcher" aria-label="Language">
          <span className="language-switcher__icon">
            <GlobeSimple size={24} weight="regular" />
          </span>
          {['TH', 'EN'].map((language) => (
            <button
              className={`language-switcher__pill${activeLanguage === language ? ' language-switcher__pill--active' : ''}`}
              type="button"
              aria-pressed={activeLanguage === language}
              key={language}
              onClick={() => setActiveLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>

        <a className="nav-item nav-item--signout" href="#sign-out">
          <span className="nav-item__icon">
            <SignOut size={24} weight="regular" />
          </span>
          Sign out
        </a>
      </div>
    </aside>
  );
}
