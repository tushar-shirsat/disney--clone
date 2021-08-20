import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo-one" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for with a Disney+ subscription. As of 03/06/21, the price
                    and The Disney Bundle will increase by s1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-two" />
            </CTA>
        </Container>
    )
}

export default Login;


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        content: "";
        position: absolute;
        inset: 0;
        background: url("/images/login-background.jpg") top / cover no-repeat fixed;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-item: center;
`;

const CTALogoOne = styled.img`

`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms linear;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 150%;
    text-align: center;
`;

const CTALogoTwo = styled.img`

`;