import {
  ModalRoot,
  ModalContent,
  ModalTrigger,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalClose,
} from "./drawer-dialog";
import { Button } from "./ui/button";

export default function ResponsiveModal() {
  return (
    <ModalRoot>
      <ModalTrigger>
        <Button variant={"outline"} className="w-fit">
          Open
        </Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>Modal Description</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose>
            <Button className="w-full" variant={"outline"}>
              Close
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </ModalRoot>
  );
}
