import { useState, useEffect } from "react";
import LoginGithub from "react-login-github";
import { ButtonWrapper } from "../atoms/buttonWrapper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setCode, setError, setToken } from "@store/slice/loginSlice";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcherToken, IData } from "services/request";

interface IResponse {
  code: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { code, error, token } = useSelector((state: RootState) => state.login);

  // success login github
  const onSuccess = async (response: IResponse) => {
    dispatch(setError(false));
    dispatch(setCode(response.code));
    //get token
    const token = await fetcherToken(response.code);
    dispatch(setToken(token.data.access_token));
  };
  // fail login
  const onFailure = (response: JSON) => {
    dispatch(setCode(""));
    dispatch(setError(true));
  };

  useEffect(() => {
    if (code !== "" && token !== "") {
      // redirect
      router.push(`/search`);
    }
  }, [code, token, router]);

  return (
    <ButtonWrapper>
      <LoginGithub
        buttonText="Login to Github"
        clientId={process.env.NEXT_PUBLIC_GITHUB_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      {error === true && <p>Error, try again later</p>}
    </ButtonWrapper>
  );
}
