import React from "react";
import styles from "./Modal.module.css";
import { clsx } from "clsx";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={clsx(styles.overlay, className)} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
