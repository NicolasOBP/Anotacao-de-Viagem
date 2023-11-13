import { ViagemAvulsa } from "../../types/viagemAvulsa";
import { Share } from "react-native";
import toast from "../toast/useToast";

export async function share(items?: ViagemAvulsa) {
  try {
    const result = await Share.share({
      message:
        "*Saindo de*: " +
        items?.saindo +
        "\n" +
        "*Indo para*: " +
        items?.indo +
        "\n" +
        "*Km percorrido*: " +
        items?.KmPercorrido +
        "km" +
        "\n" +
        "*Velocidade na Via*: " +
        items?.VeloVia +
        "Km/h" +
        "\n" +
        "*Velocidade Média*: " +
        items?.VeloFeita +
        "Km/h" +
        "\n" +
        "*Consumo*: " +
        items?.consumo +
        "Km/L" +
        "\n" +
        "*Ar*: " +
        items?.ar +
        "\n" +
        "*Gastos*: " +
        "R$" +
        items?.gastos +
        "\n" +
        "*Descrição extra*: " +
        items?.descricao,
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
    toast.succes({ message: "Compartilhado com sucesso" });
  } catch (error: any) {
    toast.danger({ message: "Erro ao compartilhar" });
    console.log(error.message);
  }
}
