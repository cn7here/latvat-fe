import HeroText from "@/components/hero-text";
import Bio from "../../../public/assets/bio.svg";
import Circle from "../../../public/assets/circle-bio.svg";
import { AvatarWrap, BioWrapper, SectionWrap, SelfWrapper } from "./styled";

const SelfScreen = () => {
  return (
    <SelfWrapper>
      <HeroText>
        Hi Im <a>Cn7Here,</a> a normal guy with some ability to love learning{" "}
        <p>JavaScript</p> and <p>TypeScript</p>
      </HeroText>

      <BioWrapper>
        <AvatarWrap>
          <Circle className="circle" />
          <Bio className="avt" />
        </AvatarWrap>
        <SectionWrap>
          <h4>Biography</h4>
          <p className="body-normal">
            Getting Buff +1 for learning, Buff +2 for documentation and more
            buff on managing team. Exicited on React, UX Research and Agile.
          </p>
        </SectionWrap>
      </BioWrapper>
    </SelfWrapper>
  );
};

export default SelfScreen;
