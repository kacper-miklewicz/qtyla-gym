import emailjs from "@emailjs/browser";

import { MembershipFormValues } from "@/app/gym-pass/membership-form/membership-form";
import { PersonalTrainingFormValues } from "@/app/trening-personalny/personal-training-form/personal-training-form";

type EmailFormName = "Członkostwo" | "Trening Personalny";

type EmailTemplateParams = MembershipFormValues | PersonalTrainingFormValues;

const sendEmail = (
  formName: EmailFormName,
  templateParams: EmailTemplateParams,
) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    {
      ...templateParams,
      formName,
    },
  );

export { sendEmail, type EmailFormName, type EmailTemplateParams };
