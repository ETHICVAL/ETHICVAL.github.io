import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import VideoIconImage from "../../images/support-icon.svg";
import AdsIconImage from "../../images/shield-icon.svg";
import WebIconImage from "../../images/customize-icon.svg";
import ArtIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import MobileIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-700`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: AdsIconImage,
      title: "Ads Management",
      description: "Smarter ads, better results. Ethic Val's expert ads management boosts ROI with tailored, budget friendly campaigns."
    },
    {
      imageSrc: VideoIconImage,
      title: "Video Marketing",
      description: "Captivate your audience, amplify your brand. Ethic Val's video marketing creates compelling content that drives business results."
    },
    {
      imageSrc: WebIconImage, title: "Web Development",
      description: "Online presence made easy. Ethic Val's web development team creates stunning, user-friendly websites that drive business growth."
    },
    {
      imageSrc: ReliableIconImage, title: "SEO",
      description: "Get noticed online, rank higher. Ethic Val's SEO service optimizes your website for search engines, driving traffic and boosting your online presence."
    },
    {
      imageSrc: ArtIconImage, title: "Digital Art",
      description: "From 2D to 3D and a plethora of styles, Ethic Val's design service brings your ideas to life with stunning visuals that elevate your brand."
    },
    {
      imageSrc: MobileIconImage, title: "Desktop And Mobile Development",
      description: "Empower your business with cutting-edge mobile and desktop apps. Ethic Val's expert development team delivers apps with seamless performance, maintainable code and intuitive user experience in record time."
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-primary-500">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
