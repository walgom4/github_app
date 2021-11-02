import Logo from "@public/logo.svg";

interface GitHubLogoProps {
  width?: number;
  height?: number;
  src?: any;
}

export default function GitHubLogo({
  width = 205,
  height = 70,
  src = Logo.src,
}: GitHubLogoProps) {
  return (
    <Logo
      viewBox={`0 0 205 70`}
      src={src}
      alt="GitHub Logo"
      width={width}
      height={height}
    />
  );
}
