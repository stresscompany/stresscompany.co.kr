import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background-size: 400px 400px;
  background-color: ${props => props.bgColor};
  background-image: ${props =>
    `linear-gradient(${props.overlayColor}, ${props.overlayColor}), url(${
      props.bgPhoto
    })`};
  padding: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`

const TagContainer = styled.div`
  background-color: ${props => props.bgColor};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 3px;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.tagColor};
`

const TagText = styled.span``

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.a`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding: 10px 0px;
  text-decoration: none;
  text-align: center;
  border-radius: 20px;
  width: 30%;
  span {
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
`

const Title = styled.span`
  display: block;
  font-size: 48px;
  font-weight: 700;
  margin-top: 8px;
  color: ${props => props.color};
`

const PreTitle = styled.span`
  font-size: 16px;
  color: ${props => props.color};
`

const ProductCard = ({
  href,
  buttonText,
  preTitle,
  preTitleColor = "white",
  title,
  titleColor = "white",
  overlayColor = "rgba(0, 31, 154, 0.3)",
  ctaColor = "white",
  ctaBg = "#006EFE",
  tag,
  tagColor = "#1F2126",
  tagBg = "white",
  bgPhoto,
  bgColor = "#DBE0E6"
}) => (
  <Container bgPhoto={bgPhoto} bgColor={bgColor} overlayColor={overlayColor}>
    {tag && (
      <TagContainer bgColor={tagBg} color={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    {(preTitle || title) && (
      <Content>
        <span>
          {preTitle && <PreTitle color={preTitleColor}>{preTitle}</PreTitle>}
          {title && <Title color={titleColor}>{title}</Title>}
        </span>
        <Button href={href} bgColor={ctaBg} color={ctaColor}>
          <span>{buttonText}</span>
        </Button>
      </Content>
    )}
  </Container>
)

ProductCard.propTypes = {
  href: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  preTitle: PropTypes.string,
  preTitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  overlayColor: PropTypes.string,
  ctaColor: PropTypes.string,
  ctaBg: PropTypes.string,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
  tagBg: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default ProductCard