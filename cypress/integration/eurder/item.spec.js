describe('Item Overview', function () {

  it('should display the items', function() {
    cy.visit('http://localhost:4200/item');
    cy.get('.item-card-wrapper').should("exist");
    cy.get('.item-card').should("exist");
  });
});
