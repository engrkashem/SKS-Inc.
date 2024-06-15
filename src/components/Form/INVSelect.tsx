import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TSelectProps = {
  label: string;
  name: string;
  options:
    | {
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
  disabled?: boolean;
  mode?: undefined | 'multiple' | 'tags';
  defaultValue?: string;
};

export default function INVSelect({
  label,
  name,
  options,
  disabled,
  mode,
  defaultValue,
}: TSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: '100%' }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
}
