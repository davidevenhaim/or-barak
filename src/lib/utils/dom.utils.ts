import { toast } from "sonner";

export const copyToClipboard = (text: string, successMessage?: string) => {
  navigator.clipboard.writeText(text);
  if (successMessage) {
    toast.success(successMessage);
  }
};
