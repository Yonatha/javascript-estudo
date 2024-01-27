
describe('Verificar componente categorias na Categorias', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Categorias')
  })
})

describe('Verificar componente categorias na Home', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Home')
  })
})

describe('Abrir página interna de detalhes do produto', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('NOME PRODUTO 1').click()
    cy.contains('GG').click()
    cy.contains('Tamanho selecionado: GG')
  })
})

/*
describe('Verificar componente seletor de cores do produto', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('NOME PRODUTO 1').click()
    cy.contains('Cor selecionada: Preto').click()
  })
})*/