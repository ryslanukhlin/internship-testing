import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import './App.css';

const App = () => {
    const [timer, setTimer] = useState(0);
    const [itWorkTimer, setIsWorkTimer] = useState(false);
    const stop = useRef(false);
    const finish = useRef(false);

    useEffect(() => {
        const intervalSecond = 1000;
        const interval = setInterval(() => {
            if (stop.current || finish.current) {
                return;
            } else {
                setTimer((prev) => prev + 1);
            }
        }, intervalSecond);
    }, []);

    const blockTimer = () => {
        setIsWorkTimer(true);
        setTimer(0);
        finish.current = true;
    };

    const startTimer = () => {
        setIsWorkTimer(false);
        setTimer(0);
        stop.current = false;
        finish.current = false;
    };

    return (
        <div className="app">
            <h1>{timer} секунд</h1>
            <div className="app__actions">
                <Button color="success" variant="contained" onClick={startTimer}>
                    Запуск
                </Button>
                <Button
                    disabled={itWorkTimer}
                    color="primary"
                    variant="contained"
                    onClick={() => (stop.current = false)}>
                    Воозобновление
                </Button>
                <Button
                    disabled={itWorkTimer}
                    color="warning"
                    variant="contained"
                    onClick={() => (stop.current = true)}>
                    Пауза
                </Button>
                <Button color="error" variant="contained" onClick={blockTimer}>
                    Завершение
                </Button>
            </div>
        </div>
    );
};

export default App;
