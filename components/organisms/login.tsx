import LoginGithub from "react-login-github";
import { ButtonWrapper } from "../atoms/buttonWrapper";

export default function Login() {
  const onSuccess = (response: JSON) => console.log(response);
  const onFailure = (response: JSON) => console.error(response);

  return (
    <ButtonWrapper>
      <LoginGithub
        buttonText="Login to Github"
        clientId={process.env.NEXT_PUBLIC_GITHUB_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </ButtonWrapper>
  );
}
