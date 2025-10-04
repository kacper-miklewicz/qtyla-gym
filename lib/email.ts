import emailjs from "@emailjs/browser";

import { MembershipFormValues } from "@/app/czlonkostwo/membership-form/membership-form";
import { TransformFormValues } from "@/app/transform/transform-form/transform-form";
import { PersonalTrainingFormValues } from "@/app/trening-personalny/personal-training-form/personal-training-form";

type EmailFormName = "Transform" | "Członkostwo" | "Trening Personalny";

type EmailTemplateParams =
  | MembershipFormValues
  | TransformFormValues
  | PersonalTrainingFormValues;

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
