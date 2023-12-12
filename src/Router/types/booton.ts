export type RootStackParamListBootom = {
  TelaInicial: undefined;
  Viagens: undefined;
  Perfil: undefined;
  AnotacaoAvulsa: undefined;
};

export type Icon =
  | "home"
  | "home-outline"
  | "airplane"
  | "airplane-outline"
  | "person-circle"
  | "person-circle-outline"
  | "md-bookmark-outline"
  | "md-bookmark-sharp";

export type MapIcon = {
  focus: Icon;
  unfocus: Icon;
};
