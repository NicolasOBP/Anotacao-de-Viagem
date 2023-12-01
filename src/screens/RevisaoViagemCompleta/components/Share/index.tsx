import React from "react";
import { ShareContainer } from "../../../../globalStyles/style";
import { FontAwesome } from "@expo/vector-icons";
import { shareAnotacaoViagemCompelta } from "../../../../utils/Share/shareAnotacaoViagemCompleta";
import { AnotacaoCompleta } from "../../../../types/viagemCompleta";

type Props = {
  item: AnotacaoCompleta;
  saindo: string;
  indo: string;
};

export default function Share({ indo, item, saindo }: Props) {
  return (
    <ShareContainer
      style={{
        alignSelf: "flex-start",
      }}
    >
      <FontAwesome
        onPress={async () =>
          await shareAnotacaoViagemCompelta(item, saindo + " para " + indo)
        }
        name="share-square-o"
        size={24}
        color="black"
      />
    </ShareContainer>
  );
}
