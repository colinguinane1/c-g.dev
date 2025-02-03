"use client";

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
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
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

const ModalTrigger = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogTrigger className={cn(`w-fit`, className)}>
        {children}
      </DialogTrigger>
    );
  } else {
    return (
      <DrawerTrigger className={cn(`w-fit`, className)}>
        {children}
      </DrawerTrigger>
    );
  }
};

const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogContent className={cn("text-left", className)}>
        {children}
      </DialogContent>
    );
  } else {
    return <DrawerContent className={cn(className)}>{children}</DrawerContent>;
  }
};

const ModalHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogHeader className={cn("text-left", className)}>
        {children}
      </DialogHeader>
    );
  } else {
    return (
      <DrawerHeader className={cn("text-left", className)}>
        {children}
      </DrawerHeader>
    );
  }
};

const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogFooter className={cn("text-left", className)}>
        {children}
      </DialogFooter>
    );
  } else {
    return <DrawerFooter className={cn(className)}>{children}</DrawerFooter>;
  }
};

const ModalTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return <DialogTitle className={cn(className)}>{children}</DialogTitle>;
  } else {
    return <DrawerTitle className={cn(className)}>{children}</DrawerTitle>;
  }
};

const ModalDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogDescription className={cn(className)}>
        {children}
      </DialogDescription>
    );
  } else {
    return (
      <DrawerDescription className={cn(className)}>
        {children}
      </DrawerDescription>
    );
  }
};

const ModalClose = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isdesktop = useMediaQuery("(min-width: 768px)");
  if (isdesktop) {
    return (
      <DialogClose className={cn("text-right", className)}>
        {children}
      </DialogClose>
    );
  } else {
    return (
      <DrawerClose className={cn("pb-4", className)}>{children}</DrawerClose>
    );
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
