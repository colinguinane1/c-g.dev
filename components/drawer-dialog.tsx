"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "./ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/lib/media-query";
import { cn } from "@/lib/utils";

const ModalRoot = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <Dialog>{children}</Dialog>;
  } else {
    return <Drawer>{children}</Drawer>;
  }
};

const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogTrigger className={cn(`w-fit`)}>{children}</DialogTrigger>;
  } else {
    return <DrawerTrigger className={cn(`w-fit`)}>{children}</DrawerTrigger>;
  }
};

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogContent className="text-left">{children}</DialogContent>;
  } else {
    return <DrawerContent>{children}</DrawerContent>;
  }
};

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogHeader className="text-left">{children}</DialogHeader>;
  } else {
    return <DrawerHeader className="text-left">{children}</DrawerHeader>;
  }
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogFooter className="text-left">{children}</DialogFooter>;
  } else {
    return <DrawerFooter>{children}</DrawerFooter>;
  }
};

const ModalTitle = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogTitle>{children}</DialogTitle>;
  } else {
    return <DrawerTitle>{children}</DrawerTitle>;
  }
};

const ModalDescription = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogDescription>{children}</DialogDescription>;
  } else {
    return <DrawerDescription>{children}</DrawerDescription>;
  }
};

const ModalClose = ({ children }: { children: React.ReactNode }) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogClose className="text-right">{children}</DialogClose>;
  } else {
    return <DrawerClose className="pb-4">{children}</DrawerClose>;
  }
};

export {
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  ModalClose,
};
