import { Button, Col, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import INVForm from '../Form/INVForm';
import INVInput from '../Form/INVInput';

export default function Login({ setIsModalOpen }) {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <Row>
      <Col span={24} lg={{ span: 16 }} style={{ margin: 'auto' }}>
        <INVForm onSubmit={onSubmit}>
          <INVInput name="email" label="Email" type="email" />
          <INVInput name="password" label="Password" type="password" />

          <Button htmlType="submit">Login</Button>
        </INVForm>
      </Col>
    </Row>
  );
}
