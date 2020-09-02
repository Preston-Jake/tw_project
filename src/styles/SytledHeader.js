import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledHeader = styled.header.attrs({
  className: `
  bg-black 
  flex 
  flex-row 
  flex-wrap
  h-screen 
  w-screen 
  `,
})`
  background-image: url(${(props) => props.headerImage});
  background-position: 45% 30%;
  background-repeat: no-repeat;
  background-size: cover;
  & #title-container {
    ${tw`
    flex 
    flex-col 
    ml-8
    mt-24 
    `}
  }
  & h1 {
    ${tw`
    font-bold
    font-sans 
    inline-block 
    lg:text-6xl 
    md:text-5xl 
    sm:text-4xl 
    text-4xl 
    text-white
    tracking-widest
    `}
  }
  & #button-container {
    ${tw`
    flex 
    justify-end 
    lg:-mt-40
    lg:justify-start 
    lg:mb-0 
    lg:ml-8 
    lg:self-start 
    mb-20 
    self-end 
    w-screen 
    `}
  }
`;
