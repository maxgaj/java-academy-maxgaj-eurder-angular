describe('Item Overview', function () {
  beforeEach(() => {
    cy.visit('http://localhost:4200/item');
  });

  it('should display the title', () => {
    cy.contains('h2', 'Items');
  });

  it('should display a filter input', () => {
    cy.get('[data-cy=filter]').should('exist');
  });

  it('should display an add button', () => {
    cy.get('[data-cy=add-button]').should('exist');
  });

  it('should have a list of cards', () => {
    cy.get('[data-cy=cards]').children().should('not.have.length', 0);
  });

  it('should filter the items', () => {
    cy.get('[data-cy=filter]').type('iph');
    cy.get('[data-cy=cards]').children().should('not.have.length', 0);
    cy.get('[data-cy=filter]').type('zzz');
    cy.get('[data-cy=cards]').children().should('have.length', 0);
  });

  it('should navigate to item details when a card is clicked', () => {
    cy.get('[data-cy=cards]').children().first().click();
    cy.location('pathname').should('include', '/item/detail');
  });

  it('should navigate to item creation when add button is clicked', () => {
    cy.get('[data-cy=add-button]').click();
    cy.location('pathname').should('include', '/item/new');
  })
});
