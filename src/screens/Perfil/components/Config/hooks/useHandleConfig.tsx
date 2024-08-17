import { useState } from "react";

export const handleConfig = () => {
  const [showCofig, setShowConfig] = useState<"none" | "flex">("none");

  const changeConfigVisibility = () => {
    setShowConfig((prevShow) => (prevShow === "none" ? "flex" : "none"));
  };
  return {
    showCofig,
    changeConfigVisibility,
  };
};
