import styled from "styled-components";
import ProfilePhoto from "@components/atoms/profilePhoto";
import ArrowDown from "@public/ArrowDown.svg";
import ProfileMenu from "@components/atoms/profileMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setReset } from "@store/slice/loginSlice";

interface ProfileInfoProps {
  name: string;
  srcPhoto: string;
}

const ProfileWrapper = styled.div`
  & .contentProfile {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 15px;
    & .name {
      padding: 0 10px;
    }
  }
  & .menuContent {
    z-index: 1;
    position: absolute;
    top: 10px;
    right: 55px;
  }
`;

export default function ProfileInfo({ name, srcPhoto }: ProfileInfoProps) {
  const [display, setDisplay] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <ProfileWrapper>
        {display && (
          <div
            className="menuContent"
            onClick={() => {
              setDisplay(false);
            }}
            onMouseLeave={() => {
              setDisplay(false);
            }}
          >
            <ProfileMenu
              onClick={() => {
                dispatch(setReset(true));
                router.replace("/");
              }}
            />
          </div>
        )}
        <div className="contentProfile">
          <ProfilePhoto src={srcPhoto} />
          <div className="name">{name}</div>
          <span
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <ArrowDown
              viewBox={`0 0 12 7`}
              src={ArrowDown.src}
              alt="Arrow down"
              width="12"
              height="7"
            />
          </span>
        </div>
      </ProfileWrapper>
    </>
  );
}
