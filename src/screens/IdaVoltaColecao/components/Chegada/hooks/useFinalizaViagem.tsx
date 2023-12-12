import useFinalizaViagemIda from "./useFinalizaViagemIda";
import useFinalizaViagemVolta from "./useFinalizaViagemVolta";

export default function useFinalizaViagem(tipo: "Ida" | "Volta") {
  const { finalizaViagemIda } = useFinalizaViagemIda();
  const { finalizaViagemVolta } = useFinalizaViagemVolta();

  function finalizaViagem() {
    if (tipo === "Ida") finalizaViagemIda();
    if (tipo === "Volta") finalizaViagemVolta();
  }
  return { finalizaViagem };
}
