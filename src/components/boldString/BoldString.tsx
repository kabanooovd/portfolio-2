import styled from "styled-components";

export const BoldString = styled.strong<{size?: string, padding?: string, margin?: string}>`
  font-size: ${({theme, size}) => size || theme.fontsSizes.DEFAULT};
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
`