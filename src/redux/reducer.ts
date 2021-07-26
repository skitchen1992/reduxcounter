import {ACTIONS_TYPE, ReducersTypes} from "./actions";

export type InitialStateType = {
    maxValue: number,
    startValue: number,
    displayValue: string | number,
    isSetButtonDisabled: boolean,
    isIncButtonDisabled: boolean,
    isResetButtonDisabled: boolean,
    isMaxInputError: boolean,
    isStartInputError: boolean,
}

const initialState: InitialStateType = {
    maxValue: 0,
    startValue: 0,
    displayValue: "",
    isSetButtonDisabled: true,
    isIncButtonDisabled: true,
    isResetButtonDisabled: true,
    isMaxInputError: true,
    isStartInputError: true
}

export const reducer = (state: InitialStateType = initialState, action: ReducersTypes): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_MAX_VALUE:
        case ACTIONS_TYPE.SET_START_VALUE:
        case ACTIONS_TYPE.SET_DISPLAY_VALUE:
        case ACTIONS_TYPE.SET_IS_SET_BUTTON_DISABLE:
        case ACTIONS_TYPE.SET_IS_INC_BUTTON_DISABLE:
        case ACTIONS_TYPE.SET_IS_RESET_BUTTON_DISABLE:
        case ACTIONS_TYPE.SET_IS_MAX_INPUT_ERROR:
        case ACTIONS_TYPE.SET_IS_START_INPUT_ERROR:
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}

