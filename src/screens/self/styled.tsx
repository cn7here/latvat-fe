import styled from "styled-components";

export const SelfWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  div {
    padding-bottom: 63px;
  }
`;

export const BioWrapper = styled.div`
  height: 782px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 155px;
  .circle {
    position: absolute;
  }

  .avt {
    position: absolute;
    z-index: 0;
  }
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
