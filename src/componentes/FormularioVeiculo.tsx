import { useState } from "react";
import type { Veiculo } from "../types/entidades";

interface FormularioVeiculoProps {
  aoEnviar: (veiculo: Veiculo) => void;
}

export function FormularioVeiculo({ aoEnviar }: FormularioVeiculoProps) {
  const [modelo, setModelo] = useState("");
  const [placa, setPlaca] = useState("");
  const [quilometragem, setQuilometragem] = useState(0);

  function tratarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    aoEnviar({ id: Date.now(), modelo, placa, quilometragem });
  }

  return (
    <form onSubmit={tratarEnvio}>
      <input
        value={modelo}
        onChange={(evento) => setModelo(evento.target.value)}
        placeholder="Modelo"
      />
      <input
        value={placa}
        onChange={(evento) => setPlaca(evento.target.value)}
        placeholder="Placa"
      />
      <input
        type="number"
        value={quilometragem}
        onChange={(evento) => setQuilometragem(Number(evento.target.value))}
        placeholder="Quilometragem"
      />
      <button type="submit">Aplicar ao cartão</button>
    </form>
  );
}
