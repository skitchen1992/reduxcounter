import React, {Dispatch, useEffect} from 'react';
import s from './App.module.css';
import Counter from "./components/Counter/Counter";
import SetCounter from "./components/SetCounter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {
    ReducersTypes,
    setDisplayValue,
    setIsIncButtonDisabled, setIsMaxInputError, setIsResetButtonDisabled,
    setIsSetButtonDisabled, setIsStartInputError,
    setMaxValue,
    setStartValue
} from "./redux/actions";
import {selectors} from "./redux/selectors";


function App() {
    const dispatch = useDispatch<Dispatch<ReducersTypes>>()

    const {
        maxValue,
        startValue,
        displayValue,
        isSetButtonDisabled,
        isIncButtonDisabled,
        isResetButtonDisabled,
        isMaxInputError,
        isStartInputError
    } = useSelector(selectors);

    useEffect(() => {
        if (maxValue === startValue) {
            dispatch(setIsStartInputError(true))
            dispatch(setIsMaxInputError(true))
        }
        if (maxValue > startValue) {
            dispatch(setIsMaxInputError(false))
            dispatch(setIsStartInputError(false))
        }
        if (maxValue < startValue) {
            dispatch(setIsMaxInputError(true))
            dispatch(setIsStartInputError(true))
        }
        if (startValue < 0) {
            dispatch(setIsStartInputError(true))
        }
        if (displayValue === maxValue) {
            dispatch(setIsIncButtonDisabled(true))
        }

    }, [startValue, maxValue, displayValue])

    const changeMaxValue = (maxValue: number) => {
        dispatch(setMaxValue(maxValue))
        dispatch(setIsIncButtonDisabled(true))
        dispatch(setIsResetButtonDisabled(true))
        if (maxValue === startValue || maxValue < startValue || startValue < 0) {
            dispatch(setIsSetButtonDisabled(true))
            dispatch(setDisplayValue("incorrect value"))
        } else {
            dispatch(setIsSetButtonDisabled(false))
            dispatch(setDisplayValue("enter values and press 'set'"))
        }
    }
    const changeStartValue = (startValue: number) => {
        dispatch(setStartValue(startValue))
        dispatch(setIsIncButtonDisabled(true))
        dispatch(setIsResetButtonDisabled(true))
        if (maxValue === startValue || maxValue < startValue || startValue < 0) {

            dispatch(setIsSetButtonDisabled(true))
            dispatch(setDisplayValue("incorrect value"))
        } else {
            dispatch(setIsSetButtonDisabled(false))
            dispatch(setDisplayValue("enter values and press 'set'"))
        }
    }
    const setNewValue = () => {
        dispatch(setIsSetButtonDisabled(true))
        dispatch(setDisplayValue(startValue))
        dispatch(setIsIncButtonDisabled(false))
        dispatch(setIsResetButtonDisabled(false))
    }
    const increment = () => {
        dispatch(setDisplayValue(+displayValue + 1))
    }
    const reset = () => {
        dispatch(setDisplayValue(startValue))
        dispatch(setIsIncButtonDisabled(false))
    }


    return (
        <>
            <div className={s.wrapper}>
                <div className={s.wrap}>
                    <SetCounter startValue={startValue}
                                maxValue={maxValue}
                                changeMaxValue={changeMaxValue}
                                changeStartValue={changeStartValue}
                                setNewValue={setNewValue}
                                isMaxInputError={isMaxInputError}
                                isStartInputError={isStartInputError}
                                isSetButtonDisabled={isSetButtonDisabled}
                    />
                </div>
                <div className={s.wrap}>
                    <Counter inc={increment}
                             reset={reset}
                             displayValue={displayValue}
                             maxValue={maxValue}
                             isIncButtonDisabled={isIncButtonDisabled}
                             isResetButtonDisabled={isResetButtonDisabled}/>
                </div>
            </div>
        </>
    );
}

export default App;


