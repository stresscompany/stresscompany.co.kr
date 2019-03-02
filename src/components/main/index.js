import styled from 'styled-components'
import Card from './card'

const Container = styled.div`
  padding: 30px;
  display: grid;
  grid-template-rows: 260px 200px 100px;
  grid-gap: 16px;
`;

export default () => (
  <Container>
    <Card
      bgPhoto="https://picsum.photos/740/420/?random"
      title="STRESS COMPANY"
      cta="HOME"
      iconName="fas fa-question"
    />
  </Container>
)