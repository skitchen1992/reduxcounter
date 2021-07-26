export enum ACTIONS_TYPE {
    SET_MAX_VALUE = "SET_MAX_VALUE",
    SET_START_VALUE = "SET_START_VALUE",
    SET_DISPLAY_VALUE = "SET_DISPLAY_VALUE",
    SET_IS_SET_BUTTON_DISABLE = "SET_IS_SET_BUTTON_DISABLE",
    SET_IS_INC_BUTTON_DISABLE = "SET_IS_INC_BUTTON_DISABLE",
    SET_IS_RESET_BUTTON_DISABLE = "SET_IS_RESET_BUTTON_DISABLE",
    SET_IS_MAX_INPUT_ERROR = "SET_IS_MAX_INPUT_ERROR",
    SET_IS_START_INPUT_ERROR = "SET_IS_START_INPUT_ERROR",
}

type SetMaxValueType = {
    type: ACTIONS_TYPE.SET_MAX_VALUE,
    payload: {
        maxValue: number,
    }
}
export const setMaxValue = (maxValue: number): SetMaxValueType => {
    return {type: ACTIONS_TYPE.SET_MAX_VALUE, payload: {maxValue}}
}

type SetStartValueType = {
    type: ACTIONS_TYPE.SET_START_VALUE,
    payload: {
        startValue: number,
    }
}
export const setStartValue = (startValue: number): SetStartValueType => {
    return {type: ACTIONS_TYPE.SET_START_VALUE, payload: {startValue}}
}

type SetDisplayValueType = {
    type: ACTIONS_TYPE.SET_DISPLAY_VALUE,
    payload: {
        displayValue: number | string
    }
}
export const setDisplayValue = (displayValue: number | string): SetDisplayValueType => {
    return {type: ACTIONS_TYPE.SET_DISPLAY_VALUE, payload: {displayValue}}
}

type setIsSetButtonDisabledType = {
    type: ACTIONS_TYPE.SET_IS_SET_BUTTON_DISABLE,
    payload: {
        isSetButtonDisabled: boolean
    }
}
export const setIsSetButtonDisabled = (isSetButtonDisabled: boolean): setIsSetButtonDisabledType => {
    return {type: ACTIONS_TYPE.SET_IS_SET_BUTTON_DISABLE, payload: {isSetButtonDisabled}}
}

type setIsIncButtonDisabledType = {
    type: ACTIONS_TYPE.SET_IS_INC_BUTTON_DISABLE,
    payload: {
        isIncButtonDisabled: boolean
    }
}
export const setIsIncButtonDisabled = (isIncButtonDisabled: boolean): setIsIncButtonDisabledType => {
    return {type: ACTIONS_TYPE.SET_IS_INC_BUTTON_DISABLE, payload: {isIncButtonDisabled}}
}

type setIsResetButtonDisabledType = {
    type: ACTIONS_TYPE.SET_IS_RESET_BUTTON_DISABLE,
    payload: {
        isResetButtonDisabled: boolean
    }
}
export const setIsResetButtonDisabled = (isResetButtonDisabled: boolean): setIsResetButtonDisabledType => {
    return {type: ACTIONS_TYPE.SET_IS_RESET_BUTTON_DISABLE, payload: {isResetButtonDisabled}}
}

type setIsMaxInputErrorType = {
    type: ACTIONS_TYPE.SET_IS_MAX_INPUT_ERROR,
    payload: {
        isMaxInputError: boolean
    }
}
export const setIsMaxInputError = (isMaxInputError: boolean): setIsMaxInputErrorType => {
    return {type: ACTIONS_TYPE.SET_IS_MAX_INPUT_ERROR, payload: {isMaxInputError}}
}

type setIsStartInputErrorType = {
    type: ACTIONS_TYPE.SET_IS_START_INPUT_ERROR,
    payload: {
        isStartInputError: boolean
    }
}
export const setIsStartInputError = (isStartInputError: boolean): setIsStartInputErrorType => {
    return {type: ACTIONS_TYPE.SET_IS_START_INPUT_ERROR, payload: {isStartInputError}}
}

export type ReducersTypes =
    SetMaxValueType
    | SetStartValueType
    | SetDisplayValueType
    | setIsSetButtonDisabledType
    | setIsIncButtonDisabledType
    | setIsResetButtonDisabledType
    | setIsMaxInputErrorType
    | setIsStartInputErrorType