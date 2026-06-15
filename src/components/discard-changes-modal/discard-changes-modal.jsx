import { X } from '@phosphor-icons/react';
import deleteIcon from '../../assets/delete-icon.png';

export function DiscardChangesModal({ onClose, onDiscard }) {
  return (
    <div className="modal-backdrop" role="presentation">
      <section className="discard-modal" role="dialog" aria-modal="true" aria-labelledby="discard-modal-title">
        <button className="discard-modal__close" type="button" aria-label="Close discard dialog" onClick={onClose}>
          <X size={18} weight="bold" />
        </button>
        <div className="discard-modal__icon" aria-hidden="true">
          <img src={deleteIcon} alt="" />
        </div>
        <div className="discard-modal__copy">
          <h2 id="discard-modal-title">Discard your changes?</h2>
          <p>Your edits will not be saved if you leave now.</p>
        </div>
        <div className="discard-modal__actions">
          <button className="discard-modal__text-action text-link text-link--black" type="button" onClick={onClose}>
            Go back
          </button>
          <button className="button button--primary" type="button" onClick={onDiscard}>
            Discard
          </button>
        </div>
      </section>
    </div>
  );
}
