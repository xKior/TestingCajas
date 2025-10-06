
describe('ToDo App - Black box e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should create a task and show it in the list', () => {
    cy.contains('+ Nueva Tarea').click();
    cy.get('#todoTitle').type('Tarea de prueba');
    cy.get('#todoDescription').type('Descripción');
    cy.get('#todoPriority').select('1');
    cy.get('form#todoForm').submit();

    cy.contains('Tarea de prueba').should('exist');
  });

  it('should prevent creating a task without title', () => {
    cy.contains('+ Nueva Tarea').click();
    cy.get('#todoTitle').clear();
    cy.get('form#todoForm').submit();

    cy.contains('Error').should('exist'); 
  });
});
