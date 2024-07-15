"use client";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

function Demo() {
  const openModal = () =>
    modals.openConfirmModal({
      title: "Please confirm your action",
      children: (
        <div>
          <Button onClick={openModal}>Open confirm modal</Button>
          <Button onClick={openModal}>Open confirm modal</Button>
          <Text size="sm">
            This action is so important that you are required to confirm it with
            a modal. Please click one of these buttons to proceed.
          </Text>
          <Button onClick={openModal}>Open confirm modal</Button>
          <Button onClick={openModal}>Open confirm modal</Button>
          <Button onClick={openModal}>Open confirm modal</Button>
        </div>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
export default Demo;
