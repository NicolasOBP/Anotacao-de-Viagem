import React from "react";
import { ShareContainer } from "@/globalStyles/style";
import { FontAwesome } from "@expo/vector-icons";
import { shareAnotacaoViagemCompelta } from "@/utils";
import { AnotacaoCompleta } from "@/types";

type Props = {
  item: AnotacaoCompleta;
  saindo: string;
  indo: string;
};

export const Share: React.FC<Props> = ({ indo, item, saindo }) => {
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
};
