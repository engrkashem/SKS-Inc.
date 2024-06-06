import { Modal } from 'antd';

export default function ModalComponent({ open, onOk, onCancel }) {
  return (
    <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
