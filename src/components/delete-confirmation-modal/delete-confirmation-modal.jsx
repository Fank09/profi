import { X } from '@phosphor-icons/react';
import deleteIcon from '../../assets/delete-icon.png';

export function DeleteConfirmationModal({ itemLabel = 'this item', onBack, onDelete }) {
  return (
    <div className="modal-backdrop delete-modal-backdrop" role="presentation">
      <section className="delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
        <button className="delete-modal__close" type="button" aria-label="Close delete dialog" onClick={onBack}>
          <X size={18} weight="bold" />
        </button>
        <div className="delete-modal__icon" aria-hidden="true">
          <img src={deleteIcon} alt="" />
        </div>
        <div className="delete-modal__copy">
          <h2 id="delete-modal-title">Delete this item?</h2>
          <p>{itemLabel} will be permanently removed from this profile.</p>
        </div>
        <div className="delete-modal__actions">
          <button className="delete-modal__text-action text-link text-link--black" type="button" onClick={onBack}>
            Back
          </button>
          <button className="button button--danger" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
}
