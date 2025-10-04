import { useState } from "react";

import { toast } from "sonner";

import {
  sendEmail,
  type EmailFormName,
  type EmailTemplateParams,
} from "@/lib/email";

function useSendEmail(resetForm: () => void) {
  const [isSending, setIsSending] = useState(false);

  async function triggerSendEmail(
    formName: EmailFormName,
    templateParams: EmailTemplateParams,
  ) {
    setIsSending(true);

    try {
      await sendEmail(formName, templateParams);
      toast.success(
        "Pomyślnie wysłano wiadomość! Skontaktujemy się z Tobą wkrótce.",
      );
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio poprzez e-mail lub telefon.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return { isSending, triggerSendEmail };
}

export { useSendEmail };
