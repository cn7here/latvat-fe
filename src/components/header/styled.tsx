import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(160px - 45px);
  border-bottom: 1px solid #4d4d4d;
  margin-bottom: calc(8% - (20px * 2) - 1px);
`;

export const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  a {
    /* margin-left: 20px; */
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #666;
    }
  }
`;
