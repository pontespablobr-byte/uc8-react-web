import { useEffect, useState } from "react";
import type { Veiculo } from "./types/entidades";

import { Cabecalho } from "./componentes/Cabecalho";
import { FormularioVeiculo } from "./componentes/FormularioVeiculo";
import { ListaVeiculos } from "./componentes/ListaVeiculos";
import { Rodape } from "./componentes/Rodape";
import { carregarVeiculos } from "./servicos/veiculos";

export default function App() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarVeiculos().then((resultado) => {
      setVeiculos(resultado);
      setCarregando(false);
    });
  }, []);

  return (
    <main>
      <Cabecalho />

      <FormularioVeiculo
        aoEnviar={(novo) => setVeiculos([...veiculos, novo])}
      />

      {carregando ? (
        <p>Carregando a frota...</p>
      ) : (
        <ListaVeiculos veiculos={veiculos} />
      )}

      <Rodape />
    </main>
  );
}
