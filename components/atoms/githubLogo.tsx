import Logo from "@public/logo.svg";

interface GitHubLogoProps {
  width?: number;
  height?: number;
  src?: any;
  classStyle?: string;
}

export default function GitHubLogo({
  width = 205,
  height = 70,
  src = Logo.src,
  classStyle,
}: GitHubLogoProps) {
  return (
    <div className={`${classStyle}`}>
      <Logo
        viewBox={`0 0 205 70`}
        src={src}
        alt="GitHub Logo"
        width={width}
        height={height}
      />
    </div>
  );
}
