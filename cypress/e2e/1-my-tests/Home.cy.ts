///<reference types="cypress"/>

context('Home Page Tests', () => {
  beforeEach(function() {
      console.log("Starting Test")
      cy.visit('http://localhost:3000/recipes');
  });

  it('should have an image on the page', () => {
    cy.get('img').should('have.length.gt', 0);
  });

  it('should have a button on the page', () => {
    cy.get('button').should('exist');
  });

  it('test for one h1 tag', () => {
    cy.get('h1').should('have.length', 1);
  });

  it('should have a search bar on the page', () => {
    cy.get('input').should('exist');
  });

});

export{}