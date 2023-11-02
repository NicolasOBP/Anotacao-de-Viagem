import { ViagemCompleta } from "../../types/viagemCompleta";
import { Share } from "react-native";

export async function shareViagemCompleta(items?: ViagemCompleta) {
    try {
      let title: string =
        "*Viagem de " +
        items?.saindo.trim() +
        " para " +
        items?.indo.trim() +
        "*\n";
  
      let partida: string =
        "*Partida*: " +
        "\n-Data: " +
        items?.partindo?.data.trim() +
        "\n-Hora: " +
        items?.partindo?.hora.trim() +
        "\n";
      if (items?.partindo?.descricaoExtra) {
        partida +=
          "-Descrição: " + items?.partindo?.descricaoExtra.trim() + "\n\n";
      }
  
      let anotacões: string;
      if (items?.anotacao) {
        anotacões = "*Anotações da Viagem*\n";
        items?.anotacao.forEach((anota) => {
          let item =
            "*Ponto de Referência: " + anota.PontoReferencia.trim() + "*\n";
          item += "Hora: " + anota.hora.trim() + "\n";
          item += "Km percorridos: " + anota.KmPercorrido.trim() + " Km\n";
          item += "Valocidade na via: " + anota.VeloVia.trim() + " Km/h\n";
          item += "Valocidade média: " + anota.VeloFeita.trim() + " Km/h\n";
          item += "Consumo: " + anota.consumo.trim() + " Km/L\n";
          if (!anota.descricao)
            item += "Ar condicionado: " + anota.ar.trim() + "\n\n";
          else {
            item += "Ar condicionado: " + anota.ar.trim() + "\n";
            item += "Descrição: " + anota.descricao.trim() + "\n\n";
          }
          anotacões += item;
        });
      } else {
        anotacões = "*Viagem sem anotações*\n";
      }
  
      let chegada: string =
        "*Chegada*: " +
        "\n-Data: " +
        items?.chegando?.data.trim() +
        "\n-Hora: " +
        items?.chegando?.hora.trim() +
        "\n";
      if (items?.chegando?.descricaoExtra) {
        chegada += "-Descrição: " + items?.chegando?.descricaoExtra.trim();
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
    } catch (error: any) {
      console.log(error.message);
    }
  }