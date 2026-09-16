const veiculo = {
  id: 1,
  modelo: "Fiat Strada",
  placa: "QWE-1234",
  quilometragem: 85000,
};

export function CartaoVeiculo() {
  return (
    <article>
      <h2>{veiculo.modelo}</h2>

      <p>Placa: {veiculo.placa}</p>

      <p>
        Quilometragem:
        {" "}
        {veiculo.quilometragem} km
      </p>
    </article>
  );
}