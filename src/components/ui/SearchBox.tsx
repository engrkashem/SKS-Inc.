import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;

export default function SearchBox() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <Search
      style={{ margin: '0 70px' }}
      placeholder="Search Product"
      onSearch={onSearch}
      enterButton
    />
  );
}
