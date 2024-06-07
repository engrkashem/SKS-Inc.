import { Modal } from 'antd';

type TModalProps = {
  isModalOpen: boolean;
  title: string;
  onOk?: any;
  onCancel?: any;
  children?: any;
  footer?: any;
};

export default function INVModal({
  title,
  isModalOpen,
  onOk,
  onCancel,
  children,
  footer,
}: TModalProps) {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
    >
      {children}
    </Modal>
  );
}
