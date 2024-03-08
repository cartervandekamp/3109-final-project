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

  it('test for one h2 tag', () => {
    cy.get('h2').should('have.length', 1);
  });
  
  it('test for one p tag', () => {
    cy.get('p').should('have.length', 1);
  });

  it('should have a search bar on the page', () => {
    cy.get('input').should('exist');
  });
  
  it('should navigate to info page after checks', () => {
    cy.get('button').click(); 
    cy.visit('http://localhost:3000/info');
    cy.url().should('include', '/info'); 
  });

  it('should have a navigation bar with links', () => {
    cy.get('NavBarDesktop').should('exist');
    // cy.get('nav a').should('have.length.gt', 0);
  });

  it('should have working charts on the info page', () => {
    cy.visit('http://localhost:3000/info');
  });

  it('should have a footer at the bottom of the page', () => {
    cy.get('footer').should('exist');
  });
});


export{}