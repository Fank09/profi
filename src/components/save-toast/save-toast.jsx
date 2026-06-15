import { CheckCircle, WarningCircle, X } from '@phosphor-icons/react';

export function SaveToast({ message, tone = 'success' }) {
  const StatusIcon = tone === 'error' ? WarningCircle : CheckCircle;

  return (
    <div className={`save-toast save-toast--${tone}`} role="status" aria-live="polite">
      <span className="save-toast__content">
        <StatusIcon size={20} weight="regular" />
        {message}
      </span>
      <X className="save-toast__close" size={16} weight="bold" aria-hidden="true" />
    </div>
  );
}
