import styled from "styled-components";
import ProfilePhoto from "@components/atoms/profilePhoto";
import ArrowDown from "@public/ArrowDown.svg";

interface ProfileInfoProps {
  name: string;
  srcPhoto: string;
}

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  & .name {
    padding: 0 10px;
  }
`;

export default function ProfileInfo({ name, srcPhoto }: ProfileInfoProps) {
  return (
    <ProfileWrapper>
      <ProfilePhoto src={srcPhoto} />
      <div className="name">{name}</div>
      <ArrowDown
        viewBox={`0 0 12 7`}
        src={ArrowDown.src}
        alt="Arrow down"
        width="12"
        height="7"
      />
    </ProfileWrapper>
  );
}
