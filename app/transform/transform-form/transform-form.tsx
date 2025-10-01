"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PREFERRED_HOURS_OPTIONS } from "@/app/constants";

import { CheckedState } from "@radix-ui/react-checkbox";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TransformPreferences } from "./transform-preferences";
import { BasicInfo } from "./basic-info";

const formSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  surname: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9\s\-()]+$/, "Nieprawidłowy numer telefonu")
    .min(9, "Numer telefonu musi mieć co najmniej 9 znaków"),
  email: z.email("Nieprawidłowy adres email"),
  currentMember: z.boolean(),
  preferredHours: z.enum(PREFERRED_HOURS_OPTIONS),
  customMessage: z
    .string()
    .max(300, "Maksymalnie 300 znaków")
    .transform((val) => (val ? val.trim() : "")),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować regulamin",
  }),
});

type TransformFormValues = z.infer<typeof formSchema>;

function TransformForm() {
  const form = useForm<TransformFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      currentMember: false,
      preferredHours: "6-9",
      customMessage: "",
      acceptTerms: false,
    },
    mode: "onTouched",
  });

  function onSubmit(values: TransformFormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="ml-auto flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <BasicInfo />
        <TransformPreferences />
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem>
              <div className="flex flex-row items-center space-y-0 space-x-2">
                <FormControl>
                  <Checkbox
                    className="size-5"
                    checked={field.value as CheckedState}
                    onCheckedChange={field.onChange}
                    required
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  <span>
                    Oświadczam, że zapoznałem(am) się i akceptuję&nbsp;
                    <Link href="/regulamin" className="px-0 underline">
                      regulamin
                    </Link>
                    &nbsp;oraz&nbsp;
                    <Link
                      href="/polityka-prywatnosci"
                      className="px-0 underline"
                    >
                      politykę prywatności
                    </Link>
                    .
                  </span>
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          type="submit"
          className="w-full md:w-40"
          size="lg"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Wyślij zapytanie
        </Button>
      </form>
    </Form>
  );
}

export { TransformForm };
