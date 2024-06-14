import { ShoppingOutlined } from '@ant-design/icons';

export default function BrandLogoName({ collapsed }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: `#ffffff`,
      }}
    >
      <ShoppingOutlined style={{ fontSize: '35px', marginRight: '1px' }} />
      {collapsed === false && (
        <h1
          style={{
            fontWeight: '900',
            fontSize: '35px',
          }}
        >
          কিনুন{' '}
        </h1>
      )}
    </div>
  );
}
