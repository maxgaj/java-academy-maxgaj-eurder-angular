describe('Item Overview', function () {

  it('should display the items', function() {
    cy.visit('http://localhost:4200/item');
    cy.contains('MacBuk Pro 15-inch');
    cy.contains('iPhony');
  });

  it('should filter the items', function() {
    cy.visit('http://localhost:4200/item');
    cy.contains('MacBuk Pro 15-inch');
    cy.contains('iPhony');
    cy.get('#item-filter-input').type('iph');
    cy.contains('MacBuk Pro 15-inch').should('not.exist');
    cy.contains('iPhony');
  })
});
