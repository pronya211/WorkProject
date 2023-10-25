///<reference types="cypress"/>

describe('Cypress commands', () => {

    it('querying', () => {
      cy.visit('http://localhost:8080/commands/actions')
  
      cy.get('#email1')
      .type('1pablo@gmail.com')
      .should('have.value', '1pablo@gmail.com');
      cy.get('#email1')
      .clear()
      .type('S{leftArrow}E{leftArrow}T{leftArrow}{rightArrow}{rightArrow}{rightArrow}T', {delay: 100});

      cy.get('.form-control.action-disabled')
      .type('Hello', {force: true, delay: 100});

      cy.get('#password1')
      .focus()
      .should('have.class', 'focus')
      .prev()
      .should('have.attr', 'style', 'color: orange;');

      cy.get('#fullName1')
      .focus()
      .blur()
      .should('have.class', 'error')
      .prev()
      .should('have.attr', 'style', 'color: red;');

      cy.get('#couponCode1')
      .type('hello')
      .parents('form')
      .submit()
      .next()
      .should('have.text', 'Your form has been submitted!');

      cy.get('#action-canvas').click();
      cy.get('#action-canvas').click('bottom');
      cy.get('#action-canvas').click('top');
      cy.get('#action-canvas').click('bottomLeft');
      cy.get('#action-canvas').click('bottomRight');
      cy.get('#action-canvas').click('topLeft');
      cy.get('#action-canvas').click('topRight');
      cy.get('#action-canvas').click('');

      cy.get('#action-canvas').click(10,10);
      cy.get('#action-canvas').click(20,20);
      cy.get('#action-canvas').click(30,30);

      cy.get('.action-labels [data-toggle="popover"]').click({multiple: true});

      cy.get('.btn-primary[data-toggle="popover"]').click({force: true});

      cy.get('[type="checkbox"]').check({force: true});

      cy.get('[type="checkbox"]').click({force: true, multiple: true});

      cy.get('[type="radio"]').check({force: true});

      cy.get('.action-select').select('apples').should('have.value', 'fr-apples');
      cy.get('.action-select').select('fr-bananas').should('have.value', 'fr-bananas');

      cy.get('#scroll-horizontal button').scrollIntoView()
      cy.get('#scroll-vertical button').scrollIntoView()
      cy.get('#scroll-both button').scrollIntoView()
      
      cy.get('#scrollable-horizontal').scrollTo('right');
      
      cy.get('.trigger-input-range')
      .invoke('val', 44)
      .trigger('change')
      .siblings('p')
      .should('have.text', '44');
    })

    
  
  })