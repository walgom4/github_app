import { useState, useEffect } from "react";
import LoginGithub from "react-login-github";
import { ButtonWrapper } from "../atoms/buttonWrapper";

interface IResponse {
  code: string;
}

export default function Login() {
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");

  const onSuccess = (response: IResponse) => {
    setCode(response.code);
  };
  const onFailure = (response: JSON) => {
    console.error(response);
    setError(true);
  };

  useEffect(() => {
    //set data to store
  }, [code]);

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
