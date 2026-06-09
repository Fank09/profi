import { Chip } from '../chip';

export function SideMenuLink({
  title,
  active = false,
  icon = null,
  chipLabel,
  chipTone = 'neutral',
  onClick,
}) {
  const Icon = icon;

  return (
    <a
      className={`nav-item${active ? ' nav-item--active' : ''}`}
      href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={onClick}
    >
      <span className="nav-item__icon">
        {Icon ? <Icon size={24} weight="regular" /> : null}
      </span>
      <span className="nav-item__label">{title}</span>
      {chipLabel ? <Chip label={chipLabel} tone={chipTone} /> : null}
    </a>
  );
}
