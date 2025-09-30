"use client";

import { scrollSectionIntoView } from "../utils";

import { Button } from "@/components/ui/button";

function SignUpButton() {
  return (
    <Button
      onClick={() => scrollSectionIntoView("sign-up-form")}
      variant="outline"
      size="lg"
    >
      Zapisz się
    </Button>
  );
}

export { SignUpButton };
