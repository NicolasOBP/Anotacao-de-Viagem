import { Share } from "react-native";
import { AnotacaoCompleta } from "../../types/viagemCompleta";
import { useToastDispatch } from "../../context/Toast/useToastDispatch";

export async function shareAnotacaoViagemCompelta(
  items: AnotacaoCompleta,
  viagem: string
) {
  const { showToast } = useToastDispatch();
  try {
    const result = await Share.share({
      message:
        "Anotação da Viagem: " +
        viagem +
        "\n" +
        "Ponto de referência: " +
        items.PontoReferencia +
        "\n" +
        "Km percorrido: " +
        items.KmPercorrido +
        "km" +
        "\n" +
        "Velocidade na Via: " +
        items.VeloVia +
        "Km/h" +
        "\n" +
        "Velocidade Média: " +
        items.VeloFeita +
        "Km/h" +
        "\n" +
        "Consumo: " +
        items.consumo +
        "Km/L" +
        "\n" +
        "Ar: " +
        items.ar +
        "\n" +
        "Descrição extra: " +
        items.descricao,
    });
    if (result.action == Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action == Share.dismissedAction) {
      // dismissed
    }
    showToast({ message: "Compartilhado com sucesso", type: "Success" });
  } catch (error: any) {
    showToast({ message: "Erro ao compartilhar", type: "Error" });
    console.log(error.message);
  }
}
