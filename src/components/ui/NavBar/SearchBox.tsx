import { Col, Input, Row } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
const { Search } = Input;

export default function SearchBox() {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <Row style={{ width: '100%' }}>
      <Col
        sm={22}
        md={20}
        lg={16}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Search
          placeholder="Search Product"
          onSearch={onSearch}
          enterButton
          style={{ width: '100%' }}
        />
      </Col>
    </Row>
    // <Search placeholder="Search Product" onSearch={onSearch} enterButton />
  );
}
