import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import logo from "../../images/logo.png";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import ContactContainer from "./ContactContainer";

const Container = tw.div`relative bg-blue-700 -mx-8 -mb-8 px-8 text-gray-100 no-underline`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-center md:justify-between items-center`;

const Column = tw.div`md:w-1/4`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.div`mt-4 text-sm font-medium flex flex-row m-10 justify-center items-center`;
const LinkListItem = tw.div`mx-5 mt-3`;
const Link = tw.a`border-b-2 text-center w-1/4 mx-10 border-transparent text-primary-500 hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>EthicVal</LogoText>
          </LogoContainer>
          <ContactContainer/>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/ethic-val/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/EthicVal">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <InstagramIcon/>
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <div className={"flex flex-row min-w-full text-center justify-center items-center "}>
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#contact">Contact</Link>
        </div>
      </FiveColumns>
    </Container>
  );
};
