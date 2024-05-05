import React from "react";
import { ShareContainer } from "../../../../globalStyles/style";
import { FontAwesome } from "@expo/vector-icons";
import { share } from "@/utils";
import { ViagemAvulsa } from "@/types";

type Props = {
  item: ViagemAvulsa;
};

export const Share: React.FC<Props> = ({ item }: Props) => {
  return (
    <ShareContainer>
      <FontAwesome
        onPress={async () => await share(item)}
        name="share-square-o"
        size={24}
        color="black"
      />
    </ShareContainer>
  );
};
