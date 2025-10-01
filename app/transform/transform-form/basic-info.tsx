import { useFormContext } from "react-hook-form";

import { CheckedState } from "@radix-ui/react-checkbox";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const BasicInfo = () => {
  const form = useFormContext();

  return (
    <div className="mb-10 flex flex-col gap-8">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Imię*</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="surname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nazwisko*</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numer telefonu*</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email*</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="currentMember"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-y-0 space-x-2">
            <FormControl>
              <Checkbox
                className="size-5"
                checked={field.value as CheckedState}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="font-normal">
              Jestem już członkiem klubu
            </FormLabel>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export { BasicInfo };
