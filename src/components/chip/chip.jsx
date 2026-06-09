export function Chip({ label, tone = 'neutral', icon, className = '' }) {
  const Icon = icon;

  return (
    <span className={`chip chip--${tone}${className ? ` ${className}` : ''}`}>
      {Icon ? (
        <span className="chip__icon">
          <Icon size={14} weight="regular" />
        </span>
      ) : null}
      {label}
    </span>
  );
}
