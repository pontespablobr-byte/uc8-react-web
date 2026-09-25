import type { Veiculo } from "../types/entidades";
import { CartaoVeiculo } from "./CartaoVeiculo";

interface ListaVeiculosProps {
  veiculos: Veiculo[];
}

export function ListaVeiculos({ veiculos }: ListaVeiculosProps) {
  if (veiculos.length === 0) {
    return <p>Nenhum veículo na frota.</p>;
  }

  return (
    <section>
      {veiculos.map((veiculo) => (
        <CartaoVeiculo key={veiculo.id} veiculo={veiculo} />
      ))}
    </section>
  );
}
