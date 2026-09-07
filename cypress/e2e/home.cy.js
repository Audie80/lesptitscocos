describe('Page d\'accueil', () => {
  it('affiche le hero principal et le titre du site', () => {
    cy.get('h1').should('contain', 'Ty Drive').and('be.visible');
    cy.get('h2').should('contain', 'Mes commerces de proximité').and('be.visible');
    cy.contains('Ty Drive ça marche comment ?').should('be.visible');
  });

  it('permet d’accéder aux catégories de commerces depuis la page d’accueil', () => {
    cy.contains('a', 'ma Boulangerie').click();
    cy.url().should('include', '/commerces/boulangerie');
  });
});
