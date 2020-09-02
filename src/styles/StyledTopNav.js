import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledTopNav = styled.div.attrs({
  className: "flex items-center justify-between flex-wrap p-2 w-screen",
})`
  background: #2c3426;
  height: auto;
  position: fixed;
  & #logo-container {
    ${tw`flex items-center flex-shrink-0 text-white mr-6 ml-4`}
}
& #logo-svg {
    ${tw`fill-current h-6 w-6 mr-1`}
}
& #logo-title {
    ${tw`font-semibold text-xl tracking-widest text-white`}
}
& #nav-container{
    ${tw`overflow-hidden sm:overflow-hidden md:overflow-hidden lg:overflow-visible w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
    max-height: ${(props) => props.collapsed || 0};
    transition: max-height 0.2s ease-out;
  }
& #hambuger-container{
    ${tw`block lg:hidden`}
}
`;
