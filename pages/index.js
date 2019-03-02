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
      </div>
    )
  }
}


