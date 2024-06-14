import { ConfigProvider } from 'antd';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFB455',
        },
      }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
