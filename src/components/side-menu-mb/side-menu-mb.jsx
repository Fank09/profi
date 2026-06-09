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

export function SideMenuMb({ open, onClose, onDashboardClick }) {
  function handleDashboardClick(event) {
    onDashboardClick?.(event);
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
              onClick={link.title === 'Dashboard' ? handleDashboardClick : onClose}
            />
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="language-switcher" aria-label="Language">
            <span className="language-switcher__icon">
              <GlobeSimple size={24} weight="regular" />
            </span>
            <span className="language-switcher__pill language-switcher__pill--active">TH</span>
            <span className="language-switcher__pill">EN</span>
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
