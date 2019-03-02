import React from 'react'
import Meta from '../src/components/meta'
import Main from '../src/components/main'
import Footer from '../src/components/footer'

import 'isomorphic-unfetch'

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/stresscompany/stresscompany.co.kr')
    const { stargazers_count: stars } = await res.json()
    return { stars }
  }

  render () {
    return (
      <div>
        <Meta />
        <Main />
        <Footer />
      </div>
    )
  }
}
