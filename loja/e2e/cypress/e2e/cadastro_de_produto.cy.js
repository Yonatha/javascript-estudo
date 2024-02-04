describe('Verificar componente categorias na Categorias', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Clientes').click()
    cy.contains('Cadastrar').click()
    // preencher o campo nome
    cy.get('input[name="nome"]').type('Yonatha ALmeida')
    cy.get('input[name="email"]').type('yonatha@gmail.com')
    cy.contains('Cadastrar').click()
  })
})