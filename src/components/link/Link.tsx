import styled from "styled-components"

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.colors.DEFAULT_TEX_COLOR};
`

export const Link: React.FC<{
  title: string
  href: string;
}> = ({
  href,
  title,
}) => {
  return <StyledLink href={href} target={"_blank"}>{title}</StyledLink>
}