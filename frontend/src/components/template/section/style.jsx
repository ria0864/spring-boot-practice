import styled from 'styled-components';

const Section = styled.section`
  width: calc(100vw - 200px);
  overflow-x: hidden;
  padding: 0 24px 24px;
`;

const Content = styled.div`
  background: #fff;
  padding: 24;
  margin: 0;
  min-height: 280;
`;

export default { Section, Content };
