import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
  value?: string;
  size?: string;
  defaultValue?: string;
};

export default function INVInput({
  name,
  label,
  type,
  size,
  disabled,
  value,
  defaultValue,
}: TInputProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size={size || 'large'}
              disabled={disabled}
              value={value}
              defaultValue={defaultValue}
              // onChange={onChange}
            />
          </Form.Item>
        )}
      />
    </div>
  );
}
