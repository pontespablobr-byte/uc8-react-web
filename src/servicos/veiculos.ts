import type { Veiculo } from "../types/entidades";

export const frota: Veiculo[] = [
  {
    id: 1,
    modelo: "Fiat Strada",
    placa: "QWE-1234",
    quilometragem: 85000,
    observacao: "Troca de óleo realizada",
  },
  {
    id: 2,
    modelo: "Toyota Hilux",
    placa: "ABC-5678",
    quilometragem: 45000,
  },
  {
    id: 3,
    modelo: "Volkswagen Saveiro",
    placa: "XYZ-9012",
    quilometragem: 62000,
    observacao: "Pneus trocados",
  },
  {
    id: 4,
    modelo: "Chevrolet S10",
    placa: "JKL-3456",
    quilometragem: 91000,
  },
];

export function carregarVeiculos(): Promise<Veiculo[]> {
  return new Promise((resolver) => {
    setTimeout(() => resolver(frota), 800);
  });
}
