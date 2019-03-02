import React from 'react'
import Meta from '../src/components/meta'
import 'isomorphic-unfetch'

function Home({ stars }) {
  return <p>stresscompany.co.kr has {stars} ⭐️</p>
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
        <Home stars={stars} />
        <footer>
          <a href="https://smartstore.naver.com/stress">Shopping</a>&nbsp;
          <a href="https://brunch.co.kr/@stresscompany#info">브런치</a>&nbsp;
          <a href="https://www.facebook.com/stresscompany/">Facebook</a>&nbsp;
          <a href="https://www.instagram.com/stresscompany/">Instagram</a>
        </footer>
      </div>
    )
  }
}


