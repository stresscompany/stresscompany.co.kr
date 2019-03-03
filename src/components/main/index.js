import styled from 'styled-components'
import FeaturedCard from './FeaturedCard'
import ProductCard from './ProductCard'
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

export default () => (
  <Container>
    <FeaturedCard
      href="https://stresscompany.net/about"
      bgPhoto="https://picsum.photos/740/420/?random"
      iconName="fas fa-question"
      title="스트레스컴퍼니"
      desc="소개"
    />
    <ProductCard
      bgPhoto="https://cdn.imweb.me/upload/S201804205ad9f4489f6be/5adef64aa81fe.jpg"
      title="8000원"
      preTitle="100일 내 편 감정 다이어리"
      tag="#문구덕후"
      buttonText="구입하기"
      href="https://smartstore.naver.com/stress/products/2186222846"
    />
    <MultiCard>
      <LinkCard href="https://www.facebook.com/stresscompany/" title="Facebook" iconName="fab fa-facebook-f" />
      <LinkCard href="https://instagram.com/stresscompany" title="Instagram" iconName="fab fa-instagram" fromColor="#8a3ab9" toColor="#bc2a8d" />
      <LinkCard href="https://brunch.co.kr/@stresscompany#info" title="Brunch" iconName="fas fa-link" fromColor="#000000" toColor="#000000" />
      <LinkCard href="https://blog.naver.com/dueoo" title="Blog" iconName="fas fa-link" fromColor="#3EAF0E" toColor="#3EAF0E" />
    </MultiCard>
  </Container>
)