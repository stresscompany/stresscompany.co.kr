import styled from 'styled-components'
import FeaturedCard from './FeaturedCard'
import LinkCard from './LinkCard'

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 260px;
  grid-gap: 14px;
`

const MultiCard = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 115px 115px;
  & > div:last-child {
    grid-column: span 1;
  }
`

//<a href="https://smartstore.naver.com/stress">스토어</a>&nbsp;
//<a href="https://brunch.co.kr/@stresscompany#info">Facebook</a>&nbsp;
//<a href="https://blog.naver.com/dueoo">Blog</a>&nbsp;

export default () => (
  <Container>
    <FeaturedCard
      bgPhoto="https://picsum.photos/740/420/?random"
      iconName="fas fa-question"
      title="STRESS COMPANY"
      desc="HOME"
      href="https://stresscompany.net/about"
    />
    <MultiCard>
      <LinkCard title="Facebook" iconName="fab fa-facebook-f" />
      <LinkCard title="Instagram" iconName="fab fa-instagram" fromColor="#8a3ab9" toColor="#bc2a8d" />
      <LinkCard title="Brunch" iconName="fas fa-link" fromColor="#000000" toColor="#000000" />
      <LinkCard title="Blog" iconName="fas fa-link" fromColor="#3EAF0E" toColor="#3EAF0E" />
    </MultiCard>
  </Container>
)