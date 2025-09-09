"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { FiPlus } from "react-icons/fi";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-steel border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  iconVariant = "chevron",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  iconVariant?: "chevron" | "plus";
}) {
  const Icon = iconVariant === "plus" ? FiPlus : ChevronDownIcon;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-xl transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          {
            "[&[data-state=open]>svg]:rotate-180": iconVariant === "chevron",
            "[&[data-state=open]>svg]:rotate-135": iconVariant === "plus",
          },
          className,
        )}
        {...props}
      >
        {children}
        <Icon
          className={cn(
            "text-muted-foreground pointer-events-none shrink-0 translate-y-0.5 transition-transform",
            {
              "size-5 duration-200": iconVariant === "chevron",
              "size-6 duration-400": iconVariant === "plus",
            },
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-left text-lg font-thin"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
