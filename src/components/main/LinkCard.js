import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.a`
  border-radius: 8px;
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(45deg, ${props.fromColor}, ${props.toColor})`};
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
  text-decoration: none;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const IconContainer = styled.div`
  margin-bottom: 8px;
`

const Title = styled.span`
  color: ${props => props.color};
  font-weight: 500;
  font-size: 18px;
`

const LinkCard = ({
  href,
  fromColor = "#494AFF",
  toColor = "#006EFE",
  iconName,
  iconSize = 2,
  iconColor = "white",
  titleColor = "white",
  title
}) => (
  <Container fromColor={fromColor} toColor={toColor} href={href}>
    <Content>
      <IconContainer>
        <i
          style={{ color: iconColor }}
          className={`${iconName} fa-${iconSize}x`}
        />
      </IconContainer>
      <Title color={titleColor}>{title}</Title>
    </Content>
  </Container>
)

LinkCard.propTypes = {
  href: PropTypes.string.isRequired,
  fromColor: PropTypes.string,
  toColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  titleColor: PropTypes.string,
  title: PropTypes.string
}

export default LinkCard