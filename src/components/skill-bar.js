import React from "react"
import styled from "styled-components"

const SkillBar = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className="skill__bar">
        <div className="skill__level" />
      </div>
    </div>
  )
}

SkillBar.displaName = "SkillBar"

export default styled(SkillBar)`
  .skill__bar {
    height: 20px;
    background-color: lightgrey;
    padding: 1px;
    border-radius: 8px;
  }
  .skill__level {
    background-color: #25303b;
    width: ${p => p.level || 0}%;
    height: 18px;
    border-radius: 8px;
  }
`
