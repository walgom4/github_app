import Image from "next/image";
import UserPic from "@public/user.png";
import styled from "styled-components";

interface ProfilePhotoProps {
  width?: number;
  height?: number;
  src?: any;
}

const ProfilePicWrapper = styled.div`
  & img {
    border-radius: 100px;
  }
`;

export default function ProfilePhoto({
  width = 50,
  height = 50,
  src = UserPic.src,
}: ProfilePhotoProps) {
  return (
    <ProfilePicWrapper>
      <Image src={src} alt="Profile picture" width={width} height={height} />
    </ProfilePicWrapper>
  );
}
