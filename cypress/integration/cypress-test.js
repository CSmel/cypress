describe('Testing my website', function () {
    it('Does not do much', function () {
        //expect(true).to.equal(true)
        cy.visit('http://www.creativesakas.com')
        // assertions
        //
        cy.get('.navbar-brand').should($navbar => {
            expect($navbar).not.to.have.attr('foo','bar')
        })
        // foo shouldn't exist and it's true
        cy.get('foo').should($foo => {
            expect($foo).not.exist
        })

        // navbar-brand shouldn't have foo = bar
        cy.get('.navbar-brand').should($navbar => {
            expect($navbar).not.to.have.attr('foo','bar')
        })
        // should only contain one class
        cy.get('.navbar-brand').should($navbar => {
            expect($navbar).to.have.length(1)
        })

        // expect #resetcon to have a value of Reset
        cy.get('#ResetCon').should($resetCon => {
            expect($resetCon).to.have.value('Reset')
        })

        // round class should contain height that is 50px
        cy.get('.round').should($round => {
            expect($round).css('height', '50px')
        })
        // contain text
        cy.get('.navbar-brand').should($navbar =>{
            expect($navbar).to.have.text('CreativeSakas')
        })
    })
})
describe('Testing a different site', function(){
    it('it will only contain one test, for simplicity', function(){
        cy.visit('https://github.com/')

        // the class sr-only shouldn't equal my name.
    cy.get('.sr-only').should($srOnly =>{
        expect($srOnly).to.not.equal('Mel')
    })

    })
})