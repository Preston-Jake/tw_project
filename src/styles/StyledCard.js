import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledCard = styled.div.attrs({ className: `h-screen bg-black flex justify-center items-end pb-20` })`
  background-image: url(${(props) => props.background});
  background-position-x: ${(props) => props.background_position_x};
  background-position-y: ${(props) => props.background_position_y};
  background-repeat: no-repeat;
  background-size: cover;
  & #title-container {
    ${tw`w-screen h-full`}
  }
  & h2 {
    ${tw`text-xl text-center font-black tracking-widest font-sans`}
    color: white;
  }
  & #link-container{
    ${tw``}
  & a{ 
    ${tw`p-2 text-orange-500`}
  }
  }
`;
