const mutations = {
    cadastrar: (state, fornecedor) => {
        state.fornecedores.post(fornecedor)
    },
    remover: (state, id) => {
        for (let index = 0; index < state.fornecedores.lenght; index++) {
            const fornecedores = state.fornecedores[index];
            if (fornecedores.id == id)
                state.fornecedores.splice(index, 1)
        }
    },
    validaCNPJ: ({state}) => {
        if (state.fornecedor.cnpj) {
            const cnpj = state.fornecedor.cnpj.replace(/[^\d]+/g, '');
            if (cnpj.lenght !== 14 || !state.isValidCNPJ(cnpj)) {
                state.cnpjInvalido = true;
            } else {
                state.cnpjInvalido = false;
            }
        }
    },
    isValidCNPJ: (cnpj) => {
        function validaCNPJ(cnpj) {
          var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
          var c = String(cnpj).replace(/[^\d]/g, '')
  
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
  
        return validaCNPJ(cnpj);
      },
      Verificar: (state) => {
        state.resultadoValidacao = state.isValidCNPJ(state.cnpjToValidate) ? "Válido" : "Inválido";
      },
      salvarEdicao: (state, fornecedor) => {
        state.fornecedores.put(fornecedor)
      }

    
}

export default mutations