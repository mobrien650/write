import React from 'react'
import styled from 'styled-components'

import { COLORS } from 'styles/color'
import { SPACING_DIMEN } from 'styles/dimen';

const Container = styled.div`
    height: 80px;
    background: ${COLORS.WHITE};
    border-bottom: 2px solid ${COLORS.COMPLIMENT};
    margin-left: ${SPACING_DIMEN.LARGE};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: ${SPACING_DIMEN.LARGE_PLUS};
`
const FlexWrapper = styled.div``

const Logo = styled.div`
    width: 200px;
    height: 65px;
    margin-bottom: ${SPACING_DIMEN.TINY};
    margin-left: ${SPACING_DIMEN.LARGE_PLUS};
    display: flex;
    justify-content: center;
    align-items: center;
`

// const LinkWrapper = styled.div`
//     width: 100px;
//     text-align: center;
//     display: inline-block;
//     margin-bottom: ${SPACING_DIMEN.SMALL};
// `

export default (props) => {
    return (
        <Container>
            <FlexWrapper>
                <Logo>ME O'Brien</Logo>
            </FlexWrapper>
            {/* <FlexWrapper>
                <LinkWrapper>Home</LinkWrapper>
                <LinkWrapper>Writings</LinkWrapper>
                <LinkWrapper>About</LinkWrapper>
                <LinkWrapper>Twitter</LinkWrapper>
            </FlexWrapper> */}
        </Container>
    )
}
