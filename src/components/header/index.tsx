import Link from "next/link";
import { HeaderWrapper, NavBarWrapper } from "./styled";
import Text from "../text";

const Header = () => {
  return (
    <HeaderWrapper>
      <Text>Hello World</Text>
      <NavBarWrapper>
        <a href="/">Home</a>
        <a href="/">Mentorship</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};

export default Header;
