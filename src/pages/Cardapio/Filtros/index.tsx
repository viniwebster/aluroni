import React from "react";
import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";

type IOpcao = typeof filtros[0];

interface PropsFiltros {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: PropsFiltros) {

  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null)
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          key={opcao.id}
          className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles["filtros__filtro--ativo"] : ""}`}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
