import styled from "styled-components";
import tw from "tailwind.macro";

export const StyledBottomNav = styled.div.attrs({
  className: "fixed bottom-0 flex justify-center md:justify-end lg:hidden w-full bg-transparent h-16",
})`
    & a{
      ${tw`p-3 h-12 w-12 text-gray-100 text-sm sm:text-sm md:text-xl`}
    }
`;
