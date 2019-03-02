import React from 'react'
import styled from 'styled-components'
import Meta from '../src/components/meta'
import 'isomorphic-unfetch'

const Title = styled.h1`
  color: black;
  font-size: 20px;
`

function Nav({ stars }) {
  return (
    <>
      <Title>stresscompany.co.kr has {stars} ⭐️</Title>
      <div></div>
    </>
  )
}

function Footer({}) {
  return (
    <footer>
      <a href="https://smartstore.naver.com/stress">Shopping</a>&nbsp;
      <a href="https://brunch.co.kr/@stresscompany#info">브런치</a>&nbsp;
      <a href="https://www.facebook.com/stresscompany/">Facebook</a>&nbsp;
      <a href="https://www.instagram.com/stresscompany/">Instagram</a>
    </footer>
  )
}

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/stresscompany/stresscompany.co.kr')
    const { stargazers_count: stars } = await res.json()
    return { stars }
  }

  render () {
    const { stars } = this.props
    return (
      <div>
        <Meta />
        <Nav stars={stars} />
        <Footer />
      </div>
    )
  }
}


