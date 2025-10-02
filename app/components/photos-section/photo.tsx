import Image from "next/image";

import { IoCloseSharp } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PhotoProps {
  path: string;
  index: number;
}

function Photo({ path, index }: PhotoProps) {
  return (
    <div className="relative aspect-square h-full w-full">
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <Image
            src={`/gym-photos/${path}`}
            alt={`Zdjęcie ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="flex !h-full !max-h-full !w-full !max-w-full min-w-0 items-center justify-center rounded-none border-0 bg-transparent p-0 focus:outline-none"
        >
          <DialogTitle className="hidden">Image {index + 1}</DialogTitle>
          <DialogClose asChild>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="fixed top-4 right-4 z-20 bg-black/90 text-white hover:bg-black/90 hover:text-white"
              aria-label="Zamknij"
            >
              <IoCloseSharp className="size-6" />
            </Button>
          </DialogClose>
          <Image
            src={`/gym-photos/${path}`}
            alt={`Zdjęcie ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="block h-auto max-h-[calc(100vh-40px)] w-auto max-w-[calc(100vw-40px)] md:max-h-[calc(100vh-100px)] md:max-w-[calc(100vw-100px)]"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { Photo };
