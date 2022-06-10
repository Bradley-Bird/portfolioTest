import { getByPlaceholderText } from '@testing-library/react'
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
      <ContentContainer>
        {tag && <Tag>{tag}</Tag>}

        <Title>
          {boldFirst ? (
            <>
            <b>{boldTitle}</b>
            {title}
            </>
          ): (
            <>
            {title}
            <b>{boldTitle}</b>
            </>
          )}
        </Title>

        <Subtitle>{subtitle}</Subtitle>

        <Button>{button}</Button>
      </ContentContainer>
    </SectionContainer>
  )
}

export default PageSection