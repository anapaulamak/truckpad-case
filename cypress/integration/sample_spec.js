describe('my first test', () => {
  it('Adding a new driver', () => {
    cy.visit('http://localhost:3000/')

    cy.get('.input-driver-name')
      .type('Ana Paula')
      .should('have.value', 'Ana Paula')

    cy.get('.input-driver-phone')
      .type('99999-9999')
      .should('have.value', '99999-9999')

    cy.get('.input-driver-birth')
      .type('05/08/1988')
      .should('have.value', '05/08/1988')

    cy.get('.input-driver-cnh')
      .type('95527582093')
      .should('have.value', '95527582093')

    cy.get('.input-driver-cnh-type')
      .type('B')
      .should('have.value', 'B')

    cy.get('.input-driver-cpf')
      .type('722.281.389-67')
      .should('have.value', '722.281.389-67')
    
    cy.get('.btn-action').click()

    cy.get('.driver-name')
      .should('have.length', 1)
      .and('contain', 'Ana Paula')

    cy.get('.driver-phone')
      .should('have.length', 1)
      .and('contain', '99999-9999')

    cy.get('.driver-birth')
      .should('have.length', 1)
      .and('contain', '05/08/1988')

    cy.get('.driver-cpf')
      .should('have.length', 1)
      .and('contain', '722.281.389-67')

    cy.get('.driver-cnh')
      .should('have.length', 1)
      .and('contain', '95527582093')

    cy.get('.driver-cnh-type')
      .should('have.length', 1)
      .and('contain', 'B')
  })
})