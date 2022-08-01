import styled, { css } from "styled-components";
import { BannerProps } from ".";

export const Banner = styled.div<BannerProps>`
    width: 14rem;
    height: 12rem;
    ${({linkImage}) => css`
        background-image: url(${linkImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `}
    border-radius: 0.28rem;
`