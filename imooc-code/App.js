import React, { Component } from 'react'
import NameCard from './NameCard'

const tags= ['恐龙', '足球小子']

export default class App extends Component {
  render() {
    return (
      <div>
        <NameCard name="King" number={123555} isHuman tags={tags}></NameCard>
      </div>
    )
  }
}
