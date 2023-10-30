export function validarNaoVazioENaoNulo(categoria){
    if(!categoria.nome)
      return false

    if (categoria.nome.length < 3)
      return false

    return true
}