import { FC, ReactNode } from "react";

const Card: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`flex flex-col rounded bg-white p-4 drop-shadow ${className || ""}`}>{children}</div>
);

Card.defaultProps = {
  className: undefined,
};

export default Card;
