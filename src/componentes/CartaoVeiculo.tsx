import type { Veiculo } from "../types/entidades";

interface CartaoVeiculoProps {
  veiculo: Veiculo;
  limiteManutencao?: number;
}

export function CartaoVeiculo({
  veiculo,
  limiteManutencao = 50000,
}: CartaoVeiculoProps) {
  return (
    <article>
      <h2>{veiculo.modelo}</h2>

      <p>Placa: {veiculo.placa}</p>

      <p>{veiculo.quilometragem} km</p>

      {veiculo.quilometragem >= limiteManutencao && (
        <p>Necessita manutenção preventiva</p>
      )}
    </article>
  );
}