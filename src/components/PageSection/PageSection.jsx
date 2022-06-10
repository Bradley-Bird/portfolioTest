import React from 'react'
import{
  SectionContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle,
  Tag,
  Button,
}from './PageSection.styles'

function PageSection({title,boldTitle,subtitle, tag, button, image,boldFirst,centeredText}) {
  return (
    <SectionContainer>
      <BackgroundImage src={image}/>
    </SectionContainer>
  )
}

export default PageSection