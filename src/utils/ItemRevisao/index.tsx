import React from "react";
import { TextInfo, TextInfoNormal } from "./style";
import { Input } from "@/components";

type Props = {
  label: string;
  value: string;
};

export const ItemRevisao: React.FC<Props> = ({ value, label }) => {
  return (
    <TextInfo>
      {label} <TextInfoNormal>{value}</TextInfoNormal>
    </TextInfo>
  );
};
