import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import "./styles.css";
import instanceAxios from "../../services/api"

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export function Radio3ButtonsGroup({ onChangeDifficult }) {
    return (
        <FormControl>
            <FormLabel id="btn-difficult">Difficult</FormLabel>
            <RadioGroup
                aria-labelledby="btn-difficult"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={onChangeDifficult}
            >
                <FormControlLabel
                    className="login-form-texts"
                    value="easy"
                    control={<Radio />}
                    label="Easy"
                />
                <FormControlLabel
                    className="login-form-texts"
                    value="medium"
                    control={<Radio />}
                    label="Medium" />
                <FormControlLabel
                    className="login-form-texts"
                    value="hard"
                    control={<Radio />}
                    label="Hard" />
            </RadioGroup>
        </FormControl>
    );
}

export function Radio2ButtonsGroup({ onChangeDisplay }) {
    return (
        <FormControl>
            <FormLabel id="btn-display">Display Mode</FormLabel>
            <RadioGroup
                aria-labelledby="btn-display"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={onChangeDisplay}
            >
                <FormControlLabel
                    className="login-form-texts"
                    value={true}
                    control={<Radio />}
                    label="Show all cards before start"
                />
                <FormControlLabel
                    className="login-form-texts"
                    value={false}
                    control={<Radio />}
                    label="Don't show any card before start"
                />
            </RadioGroup>
        </FormControl>
    );
}

export function BasicButtons({ btnType, btnName, onClick }) {
    return (
        <Stack spacing={2} direction="row">
            <Button
                variant="outlined"
                type={btnType}
                onClick={onClick}
            >
                {btnName}
            </Button>
        </Stack>
    );
}


const Menu = () => {
    const [mode, setMode] = useState(false);
    const navigate = useNavigate();
    const { gameMode, setGameMode, setCountdownModalOpen, setRecords } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await instanceAxios.get(`/records?difficult=${gameMode.difficult}`);
            setRecords(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error.message);
        }

        setMode(false);
    }

    const handleSelectDifficult = (e) => {
        setGameMode({ ...gameMode, difficult: e.target.value });
    }

    const handleSelectDisplay = (e) => {
        setGameMode({ ...gameMode, showAll: e.target.value });
    }

    const handleStartGame = () => {
        navigate("/home");
        setCountdownModalOpen(true);
    }

    return (
        <div className="menu-container">
            {mode ?
                (<div className="menu-title-container">
                    <form
                        className="menu-form-mode"
                        onSubmit={handleSubmit}
                    >
                        <Radio3ButtonsGroup
                            onChangeDifficult={handleSelectDifficult}
                        />
                        <Radio2ButtonsGroup
                            onChangeDisplay={handleSelectDisplay}
                        />

                        <BasicButtons
                            btnType="submit"
                            btnName="Ready"

                        />
                    </form>
                </div>)
                :
                (<div className="menu-title-container">
                    <h1
                        className="menu-title-texts"
                        onClick={handleStartGame}
                    >Start Game</h1>
                    <h1
                        className="menu-title-texts"
                        onClick={() => setMode(true)}
                    >
                        Mode
                    </h1>
                </div>)}
        </div>
    )
}

export default Menu