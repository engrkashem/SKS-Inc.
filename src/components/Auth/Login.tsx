import { Button, Col, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { THEME_ORANGE_COLOR } from '../../constants';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { setUser } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import { TJwtPayloadUser } from '../../types';
import { verifyToken } from '../../utils';
import INVForm from '../Form/INVForm';
import INVInput from '../Form/INVInput';

export default function Login({ setIsModalOpen, setModalText }) {
  const navigate = useNavigate();
  // redux hooks
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  // login form onSubmit handler
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Logging in');

    try {
      const res = await login(data).unwrap();
      // console.log(res);

      const user = verifyToken(res?.data?.accessToken) as TJwtPayloadUser;

      dispatch(setUser({ user, token: res?.data?.accessToken }));
      toast.success('Login Successful', { id: toastId, duration: 2000 });

      navigate(`/${user.role}/home`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }

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
        <p style={{ marginTop: '10px' }}>
          New to this Site?{' '}
          <Button
            style={{ color: THEME_ORANGE_COLOR, fontWeight: '700' }}
            onClick={() => setModalText('Register')}
            type="link"
          >
            Register
          </Button>
        </p>
      </Col>
    </Row>
  );
}
