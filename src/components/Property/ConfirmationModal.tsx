// ConfirmationModal.tsx
import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-500 fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>{message}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onConfirm}
            className="inline-flex h-10 items-center justify-center rounded-md border border-red px-1 py-1 text-center font-medium text-red hover:bg-opacity-90 lg:px-2 xl:px-2"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="text-green inline-flex h-10 items-center justify-center rounded-md border px-1 py-1 text-center font-medium hover:bg-opacity-90 lg:px-2 xl:px-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
