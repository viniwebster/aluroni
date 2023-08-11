import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import classNames from 'classnames';

interface PropsOrdenador{
  ordenador: OpcoesOrdenador,
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export default function Ordenador({ ordenador, setOrdenador }: PropsOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button 
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ""
      })} 
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
      >
        <span>{nomeOrdenador || "Ordenar Por:"}</span>
        {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
  
        <div className={`${styles.ordenador__options} ${aberto ? styles['ordenador__options--ativo'] : ""}`}>
            {opcoes.map(opcao => 
             <div 
              className={styles.ordenador__option} 
              key={opcao.value}
              onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
              > 
                {opcao.nome}
             </div>
            )}
        </div>
    </button>
  )
}
