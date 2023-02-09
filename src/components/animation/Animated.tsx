import styled, { keyframes } from "styled-components";

const optionsWindowAnimation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

export const Animated = styled.div<{
  seconds?: string;
	padding?: string;
	width?: string;
	margin?: string;
	background?: string;
	borderRadius?: string;
}>`
	padding: ${({ padding }) => padding || "0"};
	width: ${({ width }) => width || "auto"};
	margin: ${({ margin }) => margin || "0"};
	background: ${({ background }) => background || "transparent"};
	border-radius: ${({ borderRadius }) => borderRadius || "0"};
	animation: ${optionsWindowAnimation} ${({ seconds }) => seconds || "0.8s"};
`;