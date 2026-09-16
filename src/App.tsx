import { Cabecalho } from "./componentes/Cabecalho";
import { CartaoVeiculo } from "./componentes/CartaoVeiculo";
import { Rodape } from "./componentes/Rodape";

export default function App() {
  return (
    <main>
      <Cabecalho />

      <CartaoVeiculo />

      <Rodape />
    </main>
  );
}