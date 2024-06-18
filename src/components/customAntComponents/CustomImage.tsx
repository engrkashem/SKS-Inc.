import {
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';

// const src =
//   'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default function CustomImage({ src }) {
  return (
    <Image
      //   width={'100%'}
      height={250}
      src={src}
      preview={{
        toolbarRender: (
          _,
          { transform: { scale }, actions: { onZoomOut, onZoomIn, onReset } }
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            <UndoOutlined onClick={onReset} />
          </Space>
        ),
      }}
    />
  );
}
