import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  background: linear-gradient(rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${props => props.bg});
  background-position: center center;
  background-size: cover;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: white;
`

const Content = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.span`
  font-weight: 900;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 1.25;
  margin-bottom: 5px;
  margin-top: 10px;
`

const Divider = styled.div`
  background-color: ${props => props.bgColor};
  width: 50%;
  height: 4px;
  border-radius: 2px;
`

const Button = styled.a`
  background-color: ${props => props.bgColor};
  padding: 10px 0px;
  text-decoration: none;
  text-align: center;
  border-radius: 7px;
  width: 100%;
  span {
    color: white;
    font-weight: 500;
    cursor: pointer;
  }
`

const Card = ({
  title,
  desc,
  href,
  bgPhoto,
  ctaBg = "#006EFE",
  ctaColor = "white",
  iconName,
  iconSize = 2,
  iconColor = "white",
  dividerColor = "white"
}) => (
  <Container bg={bgPhoto}>
    <Content>
      {iconName && (
        <i
          style={{ color: iconColor }}
          className={`${iconName} fa-${iconSize}x`}
        />
      )}
      <Title>{title}</Title>
      <Divider bgColor={dividerColor} />
    </Content>
    <Button href={href} bgColor={ctaBg} color={ctaColor}><span>{desc}</span></Button>
  </Container>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  bgPhoto: PropTypes.string,
  ctaBg: PropTypes.string,
  ctaColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  dividerColor: PropTypes.string
}

export default Card