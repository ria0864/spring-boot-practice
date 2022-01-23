import React, { useState } from 'react';
import S from './style';
import menu from './menu';

function Option(props) {
  const { key, value } = props;

  return (
    <S.Option key={key}>
      <span>{value}</span>
    </S.Option>
  );
}

function SubMenu({ menu }) {
  const [isActive, setIsActive] = useState(false);
  const { title, option, key, icon } = menu;
  const arrowStyle = isActive ? 'active' : 'inactive';

  return (
    <>
      <S.SubMenu key={key}>
        <S.SubMenuTab onClick={() => setIsActive(!isActive)}>
          {icon}
          <span>{title}</span>
          <div className={arrowStyle} />
        </S.SubMenuTab>
        {isActive &&
          option.map(({ key, value }) => <Option key={key} value={value} />)}
      </S.SubMenu>
    </>
  );
}

function Sidebar() {
  return (
    <S.Sider>
      <S.Menu>
        {menu.map((_menu) => (
          <SubMenu menu={_menu} />
        ))}
      </S.Menu>
    </S.Sider>
  );
}

export default Sidebar;
