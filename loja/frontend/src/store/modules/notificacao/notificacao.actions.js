const actions = {
    exibir: async ({ state }, mensagem) => {
        state.texto = mensagem        
    },
}

export default actions