import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  z-index: 5;
  transform: translateY(-50%);
  width: 80%;
  max-width: 100rem;
  text-transform: uppercase;

  ${(props) =>
    props.centerText &&
    css`
      text-align: center;
    `}
`;

export const Title = styled.h2``;

export const Subtitle = styled.p``;

export const Tag = styled.div``;
