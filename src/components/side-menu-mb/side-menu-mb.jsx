import {
  BookOpenTextIcon,
  FileTextIcon,
  GlobeSimple,
  NutIcon,
  SignOut,
  Sparkle,
  SquaresFour,
  User,
  X,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { LogoProfi } from '../logo-profi';
import { SideMenuLink } from '../side-menu-link';

const mobileLinks = [
  { title: 'Dashboard', active: true, icon: SquaresFour },
  { title: 'Profile', icon: User, chipLabel: '59%', chipTone: 'purple' },
  { title: 'AI Interview', icon: Sparkle },
  { title: 'Assessments', icon: BookOpenTextIcon, chipLabel: 'Soon' },
  { title: 'Profile Views', icon: FileTextIcon, chipLabel: 'Soon' },
  { title: 'Account Setting', icon: NutIcon },
];

export function SideMenuMb({
  open,
  profileActive = false,
  accountSettingActive = false,
  onClose,
  onDashboardClick,
  onProfileClick,
  onAccountSettingClick,
}) {
  const [activeLanguage, setActiveLanguage] = useState('TH');

  function handleDashboardClick(event) {
    onDashboardClick?.(event);
    onClose();
  }

  function handleProfileClick(event) {
    onProfileClick?.(event);
    onClose();
  }

  function handleAccountSettingClick(event) {
    onAccountSettingClick?.(event);
    onClose();
  }

  return (
    <div className={`side-menu-mb${open ? ' side-menu-mb--open' : ''}`} aria-hidden={!open}>
      <button
        className="side-menu-mb__scrim"
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <aside id="mobile-menu" className="side-menu-mb__panel" aria-label="Mobile primary navigation">
        <div className="side-menu-mb__top">
          <LogoProfi />
          <button className="side-menu-mb__close" type="button" aria-label="Close menu" onClick={onClose}>
            <X size={20} weight="regular" />
          </button>
        </div>

        <nav className="sidebar__nav" aria-label="Mobile dashboard navigation">
          {mobileLinks.map((link) => (
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
                  ? handleDashboardClick
                  : link.title === 'Profile'
                    ? handleProfileClick
                    : link.title === 'Account Setting'
                      ? handleAccountSettingClick
                      : onClose
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

          <a className="nav-item nav-item--signout" href="#sign-out" onClick={onClose}>
            <span className="nav-item__icon">
              <SignOut size={24} weight="regular" />
            </span>
            Sign out
          </a>
        </div>
      </aside>
    </div>
  );
}
