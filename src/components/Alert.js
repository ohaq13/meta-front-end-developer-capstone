import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={10} backgroundColor={isSuccess ? '#EDEFEE ' : '#EDEFEE'}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold" >
            {isSuccess ? 'Submission Successful!' : 'Submission Failed!'}
          </AlertDialogHeader>
          <AlertDialogBody style={{textAlign: 'center'}}>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
