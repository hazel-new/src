import React, { Component } from 'react'

export default class NameCard extends Component {

  render() {
    const { name, number, isHuman, tags} = this.props
    return (
        // className是bootstrap功能，美化界面
        <div className='alert alert-success'>  
            <h4 className="alert alert-heading">{name}</h4>
            <ul>
                <li>电话：{number} </li>
                <li>{isHuman ? '人类':'外星生物'} </li>
                <hr></hr>
                <p>
                    {tags.map((tag,index) => (
                    <span className="badge badge-pill bg-primary" key={index}>{tag}</span>
                    ))}
                </p>
            </ul>
        </div>
    )
  }
}
 