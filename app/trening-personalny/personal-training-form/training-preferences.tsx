import { useFormContext } from "react-hook-form";

import {
  PREFERRED_COOPERATION_PERIOD_OPTIONS,
  PREFERRED_COOPERATION_PERIOD_OPTIONS_LABELS,
  PREFERRED_HOURS_OPTIONS,
  PREFERRED_HOURS_OPTIONS_LABELS,
} from "../constants";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function TrainingPreferences() {
  const form = useFormContext();

  return (
    <div className="flex flex-col gap-8">
      <FormField
        control={form.control}
        name="preferredHours"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferowane godziny treningu*</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PREFERRED_HOURS_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {PREFERRED_HOURS_OPTIONS_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="preferredCooperationPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferowany okres współpracy (opcjonalnie)</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PREFERRED_COOPERATION_PERIOD_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {PREFERRED_COOPERATION_PERIOD_OPTIONS_LABELS[option]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="customMessage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dodatkowe uwagi</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                maxLength={300}
                placeholder="Wpisz swoje pytania lub uwagi (max 300 znaków)"
                className="h-25 resize-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export { TrainingPreferences };
