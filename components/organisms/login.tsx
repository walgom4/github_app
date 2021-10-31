import LoginGithub from "react-login-github";
export default function Login() {
  const onSuccess = (response: JSON) => console.log(response);
  const onFailure = (response: JSON) => console.error(response);
  //   const clientId = process.env.
  return (
    <LoginGithub
      clientId={process.env.NEXT_PUBLIC_GITHUB_ID}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}
