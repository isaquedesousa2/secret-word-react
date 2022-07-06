import styles from './GameOver.module.css';

function GameOver({retry, score}) {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
      <button className={styles.button} onClick={retry}>Reiniciar</button>
    </div>
    
  )
}

export default GameOver;