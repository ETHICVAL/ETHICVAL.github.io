import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/nearpg-test.appspot.com/o/Hero-02-01.jpeg?alt=media&token=66852885-5987-45e7-ac7f-67f6d6ac9120",
      title: "ShapeRoute",
      description: "A crypto fitness tracker, one of the well know conglomerate collaborated with us for their fitness product",
      // locationText: "Rome, Italy",
      // pricingText: "USD 39/Day",
      // rating: "4.8",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/nearpg-test.appspot.com/o/meditec.png?alt=media&token=4fd81afa-f8ce-42e1-8acf-9341a598d94f",
      title: "MediTEC Devices",
      description: " Developed the official website for MediTEC Devices, one of India's leading manufacturers of pharmaceutical equipment. The site highlights their innovative solutions and extensive product catalog, catering to the needs of the pharmaceutical industry.",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/nearpg-test.appspot.com/o/cuwa.png?alt=media&token=31d53450-84fb-458d-a679-db6d9ca9fa5a",
      title: "CUWA",
      description: "Developed and maintained the official website for CUWA, a leading provider of custom water bottles for events and corporate branding. The website showcases their wide range of products and services, allowing businesses and event organizers to easily customize and order water bottles tailored to their specific needs.\n",

    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/nearpg-test.appspot.com/o/medico.png?alt=media&token=c96c9bcf-a280-41db-ad7b-bdf60e09c1f6",
      title: "Medico",
      description: "Developed the official website for Medico Career Partner, An institution guide aspiring medical students through their preparation journey",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/nearpg-test.appspot.com/o/cs.png?alt=media&token=09961bd8-1666-4c84-b8c4-7b54405ae8b3",
      title: "Computer Palace",
      description: " Developed the official website for Computer Palace, a leading mobile and laptop repair center based in Kochi. The website serves as a comprehensive hub for their services, providing customers with easy access to repair solutions and support.",
    },

  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Our Portfolio</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  {/*<RatingsInfo>*/}
                  {/*  <StarIcon />*/}
                  {/*  <Rating>{card.rating}</Rating>*/}
                  {/*</RatingsInfo>*/}
                </TitleReviewContainer>
                {/*<SecondaryInfoContainer>*/}
                {/*  <IconWithText>*/}
                {/*    <IconContainer>*/}
                {/*      <LocationIcon />*/}
                {/*    </IconContainer>*/}
                {/*    <Text>{card.locationText}</Text>*/}
                {/*  </IconWithText>*/}
                {/*  /!*<IconWithText>*!/*/}
                {/*  /!*  <IconContainer>*!/*/}
                {/*  /!*    <PriceIcon />*!/*/}
                {/*  /!*  </IconContainer>*!/*/}
                {/*  /!*  <Text>{card.pricingText}</Text>*!/*/}
                {/*  /!*</IconWithText>*!/*/}
                {/*</SecondaryInfoContainer>*/}
                <Description>{card.description}</Description>
              </TextInfo>
              {/*<PrimaryButton>Book Now</PrimaryButton>*/}
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
