import styled from "styled-components"

const StyledLink = styled.a<{color?: string, margin?: string}>`
  text-decoration: none;
  color: ${({theme, color}) => color || theme.colors.DEFAULT_TEX_COLOR};
  margin: ${({margin}) => margin || "0"};
`

export const Link: React.FC<{
  title: string
  href: string;
  isNewTab?: boolean;
  color?: string;
  margin?: string;
}> = ({
  href,
  title,
  isNewTab,
  color,
  margin,
}) => {
  return <StyledLink 
    href={href} 
    target={isNewTab ? "_blank" : "_self"} 
    color={color}
    margin={margin}
  >
    {title}
  </StyledLink>
}