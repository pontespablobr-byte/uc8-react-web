import type { Veiculo } from "./types/entidades";

import { Cabecalho } from "./componentes/Cabecalho";
import { CartaoVeiculo } from "./componentes/CartaoVeiculo";
import { Rodape } from "./componentes/Rodape";

const veiculo1: Veiculo = {
  id: 1,
  modelo: "Fiat Strada",
  placa: "QWE-1234",
  quilometragem: 85000,
};

const veiculo2: Veiculo = {
  id: 2,
  modelo: "Toyota Hilux",
  placa: "ABC-5678",
  quilometragem: 45000,
};

export default function App() {
  return (
    <main>
      <Cabecalho />

      <CartaoVeiculo veiculo={veiculo1} />

      <CartaoVeiculo veiculo={veiculo2} />

      <Rodape />
    </main>
  );
}