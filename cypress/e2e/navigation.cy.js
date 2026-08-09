describe('Navigation principale', () => {
  it('ouvre la page de connexion depuis la page d’accueil', () => {
    cy.visit('/login');
    cy.url().should('include', '/login');
    cy.get('h1').should('contain', 'Connexion').and('be.visible');
    cy.contains('Se connecter en tant que client').should('have.attr', 'href', '/');
  });

  it('affiche le contenu de la page de recherche', () => {
    cy.visit('/recherche');
    cy.url().should('include', '/recherche');
  });
});
