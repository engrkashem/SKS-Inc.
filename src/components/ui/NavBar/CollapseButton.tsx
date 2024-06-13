import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { THEME_ORANGE_COLOR } from '../../../constants';

export default function CollapseButton({ collapsed, setCollapsed }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: `${THEME_ORANGE_COLOR}`,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />

      <ShoppingOutlined style={{ fontSize: '50px', marginRight: '10px' }} />
      <h1
        style={{
          fontWeight: '900',
          fontSize: '35px',
        }}
      >
        কিনুন{' '}
      </h1>
    </div>
  );
}
