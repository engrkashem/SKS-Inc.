import { Button, Col, Divider, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { THEME_ORANGE_COLOR, genderOptions } from '../../constants';
import { setIsModalOpen } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import INVForm from '../Form/INVForm';
import INVInput from '../Form/INVInput';
import INVSelect from '../Form/INVSelect';

export default function Register({ setModalText }) {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(setIsModalOpen(false));
  };

  return (
    <Row>
      <Col span={24} style={{ margin: 'auto' }}>
        <INVForm onSubmit={onSubmit}>
          {/* General Info.  */}
          <Row gutter={8}>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput name="email" label="Email" type="email" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput name="password" label="Password" type="password" />
            </Col>
          </Row>

          {/* Contact Info. */}
          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="First Name" name="name.firstName" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput
                type="text"
                label="Middle Name"
                name="name.middleName"
              />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Last Name" name="name.lastName" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVSelect label="Gender" name="gender" options={genderOptions} />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Contact No." name="contactNo" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Photo" name="profilePic" />
            </Col>

            <Divider>Address</Divider>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Street" name="address.street" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="District" name="address.district" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Division" name="address.division" />
            </Col>
            <Col span={24} lg={{ span: 12 }}>
              <INVInput type="text" label="Country" name="address.country" />
            </Col>
          </Row>

          <Button htmlType="submit">Register</Button>
        </INVForm>

        <p style={{ marginTop: '10px' }}>
          Already have an Account?{' '}
          <Button
            style={{ color: THEME_ORANGE_COLOR, fontWeight: '700' }}
            onClick={() => setModalText('Login')}
            type="link"
          >
            Login
          </Button>
        </p>
      </Col>
    </Row>
  );
}
