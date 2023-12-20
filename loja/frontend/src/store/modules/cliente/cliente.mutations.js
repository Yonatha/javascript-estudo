const mutations = {
    listar: (state, data) => {
      state.clientes = data
    },
    cadastrar: (state, cliente) => {
        // state.clientes.post(cliente)
    },
    remover: (state, id) => {
       /* for (let index = 0; index < state.clientes.lenght; index++) {
            const clientes = state.clientes[index];
            if (clientes.id == id)
                state.clientes.splice(index, 1)
        }*/
    },
    validaCPF: ({state}) => {
        /*if (state.clientes.cnpj) {
            const cpf = state.cliente.cpf.replace(/[^\d]+/g, '');
            if (cpf.lenght !== 14 || !state.isValidCPF(cpf)) {
                state.cpfInvalido = true;
            } else {
                state.cpfInvalido = false;
            }
        }*/
    },
    isValidCPF: (cpf) => {
        /* function validaCPF(cpf) {
          var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
          var c = String(cpf).replace(/[^\d]/g, '')
  
          if (c.length !== 14)
            return false
  
          if (/0{14}/.test(c))
            return false
  
          for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
          if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false
  
          for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
          if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false
  
          return true
        }
  
        return validaCPF(cpf);*/
      },
      Verificar: (state) => {
        // state.resultadoValidacao = state.isValidCPF(state.cpfToValidate) ? "Válido" : "Inválido";
      },
      salvarEdicao: (state, cliente) => {
        // state.clientes.put(cliente)
      }

    
}

export default mutations