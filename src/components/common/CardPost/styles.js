import styled from 'styled-components'

export const Item = styled.div`
  max-width: 100%;
  width: 100%;
  margin-bottom: 2rem;
  height: 100%;

  ${({ landing }) =>
    landing &&
    `
      max-width: 32%;

      @media (max-width: 960px) {
        max-width: 48%;
      }
  `}

  @media (max-width: 480px) {
    max-width: 100%;
  }
`

export const Post = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
  background: #fff;
  cursor: pointer;
  transition: 0.7s;
  height: 100%;
  overflow: hidden;

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			background: #2b2a2a;
	`};
`

export const ArticleContent = styled.div`
  padding: 1rem;

  @media (max-width: 680px) {
    flex: 2;
    overflow: hidden;
    padding: 0 1rem;
  }
`

export const ArticleImg = styled.div`
  height: 300px;
  overflow: hidden;

  ${({ landing }) =>
    landing &&
    `
		height: 200px;
	`}

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 300px;

    ${({ landing }) =>
      landing &&
      `
			height: 200px;
		`}
  }

  @media (max-width: 680px) {
    height: 100px;
    width: auto;
    flex: 1;
  }
`

export const ArticleTitle = styled.h2`
  color: #212121;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 680px) {
    margin-bottom: 0.1rem;
    font-size: 12pt;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Paragraph = styled.p`
  color: #616161;
  overflow-y: hidden;

  ${({ landing }) =>
    landing
      ? `
    height: 130px;
    `
      : `
    height: 90px;

    @media (max-width: 960px) {
      height: 100px;
    }
  `}

  @media (max-width: 680px) {
    height: 20px;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    font-size: 10pt;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Info = styled.i`
  color: #212121;
  font-size: 0.8em;

  @media (max-width: 680px) {
    font-size: 0.6em;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const StyledSpan = styled.span`
  margin-left: 10px;
`
