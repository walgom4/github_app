import styled from "styled-components";
import BgImage from "@public/Rectangle.svg";

interface ProfileMenuProps {
  onClick: () => void;
}

const ProfileMenuWrapper = styled.div`
  position: relative;
  & .menu {
    font-size: 16px;
    line-height: 21px;
    color: #ff1733;
    top: 98px;
    left: 95px;
    position: absolute;
    cursor: pointer;
  }
`;

export default function ProfileMenu({ onClick }: ProfileMenuProps) {
  return (
    <>
      <ProfileMenuWrapper>
        <BgImage />
        <div className="menu" onClick={() => onClick()}>
          Logout
        </div>
      </ProfileMenuWrapper>
    </>
  );
}
