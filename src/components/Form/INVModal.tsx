import { Modal } from 'antd';
import { getModalState } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

type TModalProps = {
  title: string;
  onOk?: any;
  onCancel?: any;
  children?: any;
  footer?: any;
};

export default function INVModal({
  title,
  onOk,
  onCancel,
  children,
  footer,
}: TModalProps) {
  const isModalOpen = useAppSelector(getModalState);
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
