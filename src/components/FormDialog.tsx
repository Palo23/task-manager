import { ReactNode } from 'react';
import { Dialog, DialogContent } from '.';

interface FormDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const FormDialog = ({ open, onClose, children }: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-neutral-3 border-0 w-fit">{children}</DialogContent>
    </Dialog>
  );
};

export { FormDialog };
