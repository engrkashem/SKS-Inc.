import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';

export default function Loading() {
  return (
    <Card style={{ width: '100%', marginTop: 16 }} loading={true}>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}
