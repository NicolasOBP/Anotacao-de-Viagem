import React from "react";
import { ShareContainer } from "../../../../globalStyles/style";
import { FontAwesome } from "@expo/vector-icons";
import { share } from "../../../../utils/Share/shareViagemAvulsa";
import { ViagemAvulsa } from "../../../../types/viagemAvulsa";

type Props = {
  item: ViagemAvulsa;
};

export default function Share({ item }: Props) {
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
}
