const initialState = {
    productos:[],
    error: null,
    loading: false
}
//Si se le pasa un state queda ese, sino queda el state inicial 
//El store le pasa el state y la accion que se va a ejecutar
//Pero si no se le pasa nada queda con el state inicial
export default function(state = initialState, action){
    switch(action.type){
        default: 
            return state;
    }
};