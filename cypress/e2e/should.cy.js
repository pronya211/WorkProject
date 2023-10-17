///<reference types="cypress"/>

describe('Assertions', () => {
  it('Should', () => {
    cy.visit('http://localhost:8080/commands/assertions')

    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class');
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.class', 'success');
    cy.get('.table.table-bordered.assertion-table tr').eq(3).should('have.attr', 'class', 'success');

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'Column content');
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', 'umn content'); // пошук по частині значення
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'Column content');
    // cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', 'umn content'); // fail

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.html', 'Column content');


    // cy.get('.table.table-bordered.assertion-table tr td').then( cells => {
    //   for (let i=0; i < cells.length; i++){
    //     cy.wrap(cells[i]).should('have.text', 'Column content');
    //   }
    // })

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.contain', 'asdasdasd');

    cy.get('th[scope="row"]').first().should('have.text', '1');
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('be.greaterThan', 0)
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('be.lessThan', 2)
    cy.get('th[scope="row"]').first().invoke('text').then(parseFloat).should('equal', 1)
    

    cy.visit('http://localhost:8080/commands/querying')
  })
})