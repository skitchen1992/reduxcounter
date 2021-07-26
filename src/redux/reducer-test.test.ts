// import {InitialStateType, reducer} from "./reducer";
// import {changeMaxValue, changeStartValue} from "./actions";
//
//
// test('changeMaxValue', () => {
//     const initialState: InitialStateType = {
//         maxValue: 0,
//         startValue: 0,
//         displayValue: "",
//         isSetButtonDisabled: true,
//         isIncButtonDisabled: true,
//         isResetButtonDisabled: true,
//         isMaxInputError: true,
//         isStartInputError: true
//     }
//     let isError = (initialState.maxValue === initialState.startValue || initialState.maxValue < initialState.startValue || initialState.startValue < 0);
//     const action = changeMaxValue(initialState.maxValue + 1,isError);
//
//     const endState = reducer(initialState, action)
//
//     expect(endState).toEqual({
//         maxValue: 1,
//         startValue: 0,
//         displayValue: "enter values and press 'set'",
//         isSetButtonDisabled: false,
//         isIncButtonDisabled: true,
//         isResetButtonDisabled: true,
//         isMaxInputError: true,
//         isStartInputError: true
//     });
//
// });
// test('changeStartValue', () => {
//     const initialState: InitialStateType = {
//         maxValue: 0,
//         startValue: 0,
//         displayValue: "",
//         isSetButtonDisabled: true,
//         isIncButtonDisabled: true,
//         isResetButtonDisabled: true,
//         isMaxInputError: true,
//         isStartInputError: true
//     }
//
//     const action = changeStartValue(initialState.startValue + 1);
//
//     const endState = reducer(initialState, action)
//
//     expect(endState).toEqual({
//         maxValue: 0,
//         startValue: 1,
//         displayValue: "",
//         isSetButtonDisabled: true,
//         isIncButtonDisabled: true,
//         isResetButtonDisabled: true,
//         isMaxInputError: true,
//         isStartInputError: true
//     });
//
// });

export let a = 1;