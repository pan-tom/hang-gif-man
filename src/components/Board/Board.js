import React, { useEffect, useState } from 'react';

import Keyboard from './Keyboard';
import Letters from './Letters';
import RestartButton from './RestartButton';
import Result from './Result';
import wordsList from '../../data/words.json';

const getRandomWordLetters = () => {
    const randomKey = Math.floor(
        Math.random() * wordsList.length
    );
    return wordsList[randomKey]
        .toUpperCase()
        .split('');
};

export default () => {

    const [wordLetters, setWordLetters] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [gameResult, setGameResult] = useState(null);

    const startGame = () => {
        setWordLetters(getRandomWordLetters());
        setSelectedLetters([]);
        setGameResult(null);
    };

    const handleKeyClick = letter => {
        setSelectedLetters(prevLetters => [...prevLetters, letter]);
    };

    const onFailed = () => {
        setGameResult('failed');
    };

    const onSucceed = () => {
        setGameResult('succeed');
    };

    useEffect(() => {
        startGame();
    }, []);

    return (
        <>
            <RestartButton
                onClick={startGame}
            />
            <Result
                letters={wordLetters}
                selectedLetters={selectedLetters}
                onFailed={onFailed}
            />
            {wordLetters.length > 0 && (
                <>
                    <Letters
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

};
