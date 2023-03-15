import { Link, useMatch } from "react-router-dom";

const CustomLinkComponent = (children: any, to: any, ...props: any) => {
  const match = useMatch(to);
  console.log({ match });
  return (
    <>
      <Link
        to={to}
        style={{ color: match ? "var(--color-active)" : "black" }}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLinkComponent;
