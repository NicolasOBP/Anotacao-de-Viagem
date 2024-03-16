import { ViagemCompleta } from "../../types/viagemCompleta";
import { Share } from "react-native";
import { useToastDispatch } from "../../context/Toast/useToastDispatch";

export async function shareViagemCompleta(items: ViagemCompleta) {
  const { showToast } = useToastDispatch();
  try {
    let title: string =
      "*Viagem de " + items.saindo + " para " + items.indo + "*\n";

    let partida: string =
      "*Partida*: " +
      "\n-Data: " +
      items.partindo.data +
      "\n-Hora: " +
      items.partindo.hora +
      "\n";
    if (items.partindo.descricaoExtra) {
      partida += "-Descrição: " + items.partindo.descricaoExtra + "\n\n";
    }

    let anotacões: string;
    if (items.anotacao) {
      anotacões = "*Anotações da Viagem*\n";
      items.anotacao.forEach((anota) => {
        let item = "*Ponto de Referência: " + anota.PontoReferencia + "*\n";
        item += "Hora: " + anota.hora + "\n";
        item += "Km percorridos: " + anota.KmPercorrido + " Km\n";
        item += "Valocidade na via: " + anota.VeloVia + " Km/h\n";
        item += "Valocidade média: " + anota.VeloFeita + " Km/h\n";
        item += "Consumo: " + anota.consumo + " Km/L\n";
        if (!anota.descricao) item += "Ar condicionado: " + anota.ar + "\n\n";
        else {
          item += "Ar condicionado: " + anota.ar + "\n";
          item += "Descrição: " + anota.descricao + "\n\n";
        }
        anotacões += item;
      });
    } else {
      anotacões = "*Viagem sem anotações*\n";
    }

    let chegada: string =
      "*Chegada*: " +
      "\n-Data: " +
      items.chegando.data +
      "\n-Hora: " +
      items.chegando.hora +
      "\n";
    if (items.chegando.gastos) {
      chegada += "-Gastos: " + "R$" + items.chegando.gastos;
    }
    if (items.chegando.descricaoExtra) {
      chegada += "-Descrição: " + items.chegando.descricaoExtra;
    }

    const result = await Share.share({
      message: title + partida + anotacões + chegada,
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
