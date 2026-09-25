import { useState } from "react";
import type { Veiculo } from "../types/entidades";

interface CartaoVeiculoProps {
  veiculo: Veiculo;
  limiteManutencao?: number;
}

export function CartaoVeiculo({
  veiculo,
  limiteManutencao = 50000,
}: CartaoVeiculoProps) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  return (
    <article>
      <h2>{veiculo.modelo}</h2>

      <button onClick={() => setMostrarDetalhes(!mostrarDetalhes)}>
        {mostrarDetalhes ? "Ocultar detalhes" : "Ver detalhes"}
      </button>

      {mostrarDetalhes && (
        <>
          <p>Placa: {veiculo.placa}</p>
          <p>{veiculo.quilometragem} km</p>
          <p>{veiculo.observacao ?? "Sem observações"}</p>

          {veiculo.quilometragem >= limiteManutencao && (
            <p className="alerta">
              Necessita manutenção preventiva
            </p>
          )}
        </>
      )}
    </article>
  );
}