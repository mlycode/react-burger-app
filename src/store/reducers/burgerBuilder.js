import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

//State
const initialState = {
    ingredients: null,
    totalPrice: 2.5,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 2.5,
    bacon: 1.5
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const removeIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const removeIngredients = updateObject(state.ingredients, removeIngredient);
    const removedState = {
        ingredients: removeIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, removedState);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        error: false,
        totalPrice: 2.5
    });
};

const fetchIngredientsFailed = (state) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;