describe('Item Create', function () {
  beforeEach(() => {
    cy.visit('http://localhost:4200/item/new');
  });

  it('should display the title', () => {
    cy.contains('h2', 'Create Item');
  });

  it('should display a cancel button', () => {
    cy.get('[data-cy=cancel-button]').should('exist');
  });

  it ('should navigate back to overview when cancel button is clicked', () => {
    cy.get('[data-cy=cancel-button]').click();
    cy.contains('h2', 'Items');
  });

  it('should display the form', () => {
    cy.get('[data-cy=name-input]').should('exist');
    cy.get('[data-cy=description-textarea]').should('exist');
    cy.get('[data-cy=price-input]').should('exist');
    cy.get('[data-cy=amountOfStock-input]').should('exist');
    cy.get('[data-cy=submit-button]').should('exist');
  });

  it('should have a disabled submit button by default', () => {
    cy.get('[data-cy=submit-button]').should('have.attr', 'disabled');
  });

  it('should display error message for empty name', () => {
    cy.get('[data-cy=name-input]').type('test');
    cy.get('[data-cy=name-input]').clear();
    cy.get('[data-cy=cancel-button]').focus();
    cy.get('#mat-error-0').should('exist');
    cy.get('[data-cy=submit-button]').should('have.attr', 'disabled');
  });

  it('should display error message for empty description', () => {
    cy.get('[data-cy=description-textarea]').type('test');
    cy.get('[data-cy=description-textarea]').clear();
    cy.get('[data-cy=cancel-button]').focus();
    cy.get('#mat-error-1').should('exist');
    cy.get('[data-cy=submit-button]').should('have.attr', 'disabled');
  });

  it('should display error message for negative value on price', () => {
    cy.get('[data-cy=price-input]').type('-1');
    cy.get('[data-cy=cancel-button]').focus();
    cy.get('#mat-error-2').should('exist');
    cy.get('[data-cy=submit-button]').should('have.attr', 'disabled');
  });

  it('should display error message for negative value on amountOfStock', () => {
    cy.get('[data-cy=amountOfStock-input]').type('-1');
    cy.get('[data-cy=cancel-button]').focus();
    cy.get('#mat-error-3').should('exist');
    cy.get('[data-cy=submit-button]').should('have.attr', 'disabled');
  });

  it('should enable submit button on valid form', () => {
    cy.get('[data-cy=name-input]').type('test');
    cy.get('[data-cy=description-textarea]').type('test');
    cy.get('[data-cy=price-input]').type('1');
    cy.get('[data-cy=amountOfStock-input]').type('1');
    cy.get('[data-cy=submit-button]').should('not.have.attr', 'disabled');
    cy.get('#mat-error-0').should('not.exist');
    cy.get('#mat-error-1').should('not.exist');
    cy.get('#mat-error-2').should('not.exist');
    cy.get('#mat-error-3').should('not.exist');
  });

  it('should display the counter of characters', () => {
    cy.get('[data-cy=description-textarea]').type('test');
    cy.get('#mat-hint-0').contains('251 characters left');
  });

  it ('should display the item detail on a valid form submit', () => {
    cy.get('[data-cy=name-input]').type('test');
    cy.get('[data-cy=description-textarea]').type('test');
    cy.get('[data-cy=price-input]').type('1');
    cy.get('[data-cy=amountOfStock-input]').type('1');
    cy.get('[data-cy=submit-button]').click();
    cy.location('pathname').should('include', '/item/detail');
    cy.get('[data-cy=name-input]').should('have.value', 'test');
    cy.get('[data-cy=description-textarea]').should('have.value', 'test');
    cy.get('[data-cy=price-input]').should('have.value', '1');
    cy.get('[data-cy=amountOfStock-input]').should('have.value', '1');
  })


});
