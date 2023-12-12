import { MapIcon, RootStackParamListBootom } from "../types/booton";

export const mapIcons: Record<keyof RootStackParamListBootom, MapIcon> = {
  Perfil: {
    focus: "person-circle",
    unfocus: "person-circle-outline",
  },
  TelaInicial: {
    focus: "home",
    unfocus: "home-outline",
  },
  Viagens: {
    focus: "airplane",
    unfocus: "airplane-outline",
  },
  AnotacaoAvulsa: {
    focus: "md-bookmark-sharp",
    unfocus: "md-bookmark-outline",
  },
};
