import styled from "styled-components";
import { SCREEN_WIDTH } from "../../styles-config";

export const PageTitle = styled.div`
font-size: ${({theme}) => theme.fontsSizes.S9};
color: ${({theme}) => theme.colors.GREY_LIGHT2};

@media (max-width: ${SCREEN_WIDTH.L}px) {
  font-size: ${({theme}) => theme.fontsSizes.S8};
};

@media (max-width: ${SCREEN_WIDTH.S}px) {
  font-size: ${({theme}) => theme.fontsSizes.S7};
};

@media (max-width: ${SCREEN_WIDTH.XS}px) {
  font-size: ${({theme}) => theme.fontsSizes.S6};
};
`