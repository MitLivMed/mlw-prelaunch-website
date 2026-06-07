import { useEffect, RefObject } from "react";

interface UseModalKeyboardOptions {
  isOpen: boolean;
  modalRef: RefObject<HTMLElement>;
  closeButtonRef: RefObject<HTMLElement>;
  onClose: () => void;
  onExtraKeyDown?: (e: KeyboardEvent) => void;
}

export function useModalKeyboard({
  isOpen,
  modalRef,
  closeButtonRef,
  onClose,
  onExtraKeyDown,
}: UseModalKeyboardOptions) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      onExtraKeyDown?.(e);

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onExtraKeyDown]);
}
