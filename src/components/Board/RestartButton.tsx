import styles from './RestartButton.module.scss'

type RestartButtonProps = {
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const RestartButton = ({ disabled, onClick }: RestartButtonProps) => (
  <button className={styles.btn} disabled={disabled} onClick={onClick} aria-label="Restart game">
    RESTART GAME
  </button>
)

export default RestartButton
