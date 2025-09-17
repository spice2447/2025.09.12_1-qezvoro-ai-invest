"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ModalOptions = {
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  /** Кастомные кнопки. Если не указать — будет стандартная кнопка Close */
  footer?: ReactNode;
  /** Закрывать по клику вне? */
  dismissible?: boolean;
  /** Ширина — опционально через класс (sm:max-w-[...] ) */
  contentClassName?: string;
};

type ModalState = ModalOptions & { open: boolean };

type ModalContextType = {
  openModal: (opts: ModalOptions) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider/>");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>({ open: false });

  const closeModal = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  const openModal = useCallback((opts: ModalOptions) => {
    setState({ open: true, ...opts });
  }, []);

  const value = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Dialog open={state.open} onOpenChange={(v) => (v ? null : closeModal())}>
        <DialogContent
          onInteractOutside={(e) => {
            if (state.dismissible === false) e.preventDefault();
          }}
          className={state.contentClassName}
        >
          <DialogTitle></DialogTitle>
          {(state.title || state.description) && (
            <DialogHeader>
              {state.title && <DialogTitle>{state.title}</DialogTitle>}
              {state.description && <DialogDescription>{state.description}</DialogDescription>}
            </DialogHeader>
          )}

          {state.content}

          <DialogFooter>
            {state.footer ?? <Button variant="secondary" onClick={closeModal}>Close</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
}
