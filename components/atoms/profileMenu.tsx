import styled from "styled-components";

interface ProfileMenuProps {
  width?: number;
  height?: number;
  src?: any;
}

const ProfilePicWrapper = styled.div`
  & img {
    border-radius: 100px;
  }
`;

export default function ProfileMenu({
  width = 50,
  height = 50,
}: ProfileMenuProps) {
  return <div></div>;
}
