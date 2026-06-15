export function ToggleSwitch({ label, checked, onChange }) {
  return (
    <button
      className={`toggle-switch${checked ? ' toggle-switch--checked' : ''}`}
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
    >
      <span className="toggle-switch__thumb" />
    </button>
  );
}
