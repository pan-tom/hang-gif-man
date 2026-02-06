import Keyboard from './Keyboard'
import Letters from './Letters'
import RestartButton from './RestartButton'
import Result from './Result'
import { useHangmanGame } from './Board.hooks'

const Board = () => {
  const {
    wordLetters,
    selectedLetters,
    gameResult,
    restartGame,
    handleKeyClick,
    onFailed,
    onSucceed,
    gameStatusMessage,
  } = useHangmanGame()

  return (
    <>
      <RestartButton onClick={restartGame} disabled={!selectedLetters.length} />
      <Result
        gameResult={gameResult}
        letters={wordLetters}
        selectedLetters={selectedLetters}
        onFailed={onFailed}
      />
      {gameStatusMessage && (
        <div role="status" aria-live="polite" className="sr-only">
          {gameStatusMessage}
        </div>
      )}
      {wordLetters.length > 0 && (
        <>
          <Letters
            gameResult={gameResult}
            letters={wordLetters}
            selectedLetters={selectedLetters}
            onSucceed={onSucceed}
          />
          <Keyboard
            handleKeyClick={handleKeyClick}
            selectedLetters={selectedLetters}
            disabled={gameResult !== null}
          />
        </>
      )}
    </>
  )
}

export default Board
