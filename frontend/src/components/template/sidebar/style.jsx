import styled from 'styled-components';

const Sider = styled.aside`
  height: 100%;
  width: 200px;
  background: #fff;
  max-height: calc(100vh - 64px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.85);
`;

const SubMenu = styled.li`
  color: rgba(0, 0, 0, 0.85);
  padding-bottom: 0.02px;
  cursor: pointer;
`;

const SubMenuTab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;

  &:hover {
    color: #1890ff;
  }

  span:first-child {
    padding-right: 10px;
  }

  div {
    position: absolute;
    right: 20px;
    border-left: 5px solid #fff;
    border-right: 5px solid #fff;

    &.inactive {
      border-bottom: 5px solid rgba(0, 0, 0, 0.85);
    }

    &.active {
      border-top: 5px solid rgba(0, 0, 0, 0.85);
    }
  }
`;

const Option = styled.div`
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;

  &:hover {
    color: #1890ff;
  }
`;

export default { Sider, Menu, SubMenu, SubMenuTab, Option };
