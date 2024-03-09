import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-7xl min-w-[320px] md:mx-auto mx-3">{children}</div>
  );
};

export default Container;
