import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { THEME_ORANGE_COLOR } from '../../../constants';
const { Search } = Input;

export default function SearchBox() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);

  // Search button
  const customSearchBtn = (
    <Button
      type="primary"
      style={{
        borderColor: `${THEME_ORANGE_COLOR}`,
        backgroundColor: `${THEME_ORANGE_COLOR}`,
      }}
    >
      <SearchOutlined style={{ fontWeight: '900', fontSize: '20px' }} />
    </Button>
  );
  return (
    <Search
      style={{ margin: '0 70px' }}
      status="warning"
      placeholder="Search Product"
      onSearch={onSearch}
      enterButton={customSearchBtn}
    />
  );
}
