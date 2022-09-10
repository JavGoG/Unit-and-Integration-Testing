describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
 // 1. Do the number buttons update the display of the running total?
  it('should number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
// 2. Do the arithmetical operations update the display with the result of the operation?
  it('should the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number7').click();
    cy.get('operator-divide').click();
    cy.get('#number7').click();
    cy.get('operator-equals').click();
    cy.get('.display').should('contain', '1')
  })
// 3. Can multiple operations be chained together?
  it('should the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number1').click();
    cy.get('operator-multiply').click();
    cy.get('#number3').click();
    cy.get('operator-subtract').click();
    cy.get('#number4').click();
    cy.get('operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('should the output as expected for a range of numbers positive, negative, decimals and very large numbers', () => {
  cy.get('#number1').click();
  cy.get('#number2').click();
  cy.get('#number3').click();
  cy.get('#number4').click();
  cy.get('#number5').click();
  cy.get('operator-subtract').click();
  cy.get('#number0').click();
  cy.get('decimal').click();
  cy.get('#number3').click();
  cy.get('#number4').click();
  cy.get('#number5').click();
  cy.get('#number6').click();
  cy.get('#number7').click();
  cy.get('#number8').click();
  cy.get('#number9').click();
  cy.get('operator-equals').click();
  cy.get('.display').should('contain', '12344.6543211')
})
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
it('should return Indeterminate after dividing one number by zero', () => {
  cy.get('#number2').click();
  cy.get('operator-divide').click();
  cy.get('#number0').click();
  cy.get('operator-equals').click();
  cy.get('.display').should('contain', 'Indeterminate')
})
})
// 