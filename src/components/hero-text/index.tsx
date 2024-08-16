import { HeroTextTypo, HeroTextWrapper } from "./styled";

interface HeroTextProps {
  children: React.ReactNode;
}

const HeroText = ({ children }: HeroTextProps) => {
  return (
    <HeroTextWrapper>
      <HeroTextTypo>{children}</HeroTextTypo>
    </HeroTextWrapper>
  );
};

export default HeroText;
