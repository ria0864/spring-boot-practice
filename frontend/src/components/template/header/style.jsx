import styled from 'styled-components';

const Header = styled.header`
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
  display: flex;
  align-items: center;
  line-height: normal;
  height: 64px;
  padding: 0 50px;
  overflow: none;

  & a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #1890ff;
    }
  }
`;

const Tabs = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.div`
  width: 120px;
  height: 43px;
  margin: 0;
  > a > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default { Header, Tabs, Logo };
