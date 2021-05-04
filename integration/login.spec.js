//================================ Scenario Positif Test Case ( Sukses Submit ) ============================== //
describe('Sukses Submit ', function(){
    it('Buka halaman url dashboard text-box', function(){
        cy.visit('https://demoqa.com/text-box')
        cy.wait(200)
    })
    it('Input menggunakan full name yang benar', function(){
        cy.get('input[type = "text"]').type("Niken Arra Ilma Auliya")
    })
    it('Input menggunakan email yang benar', function(){
        cy.get('input[type = "email"]').type("nikenarrailmauliya@gmail.com")
    })
    it('Input menggunakan current address yang benar', function(){
        cy.get('#currentAddress').type("nganjuk")
    })
    it('Input menggunakan permanent address yang benar', function(){
        cy.get('#permanentAddress').type("malang")
    })
    it('Clik Button Submit', function(){
        cy.get('#submit').contains('Submit').click()
    })
})


// ================================ Scenario Negatif Test Case ( Gagal Login ) ============================== //
describe('Gagal Submit', function(){
    it('Buka halaman url dashboard text-box', function(){
        cy.visit('https://demoqa.com/text-box')
        cy.wait(200)
    })
    it('Input menggunakan full name yang salah', () => { 
        const wrongFullname = 'niken'; 
        cy.get('input[type="text"]') 
           .focus() 
           .type(wrongFullname) 
           .should('have.value', wrongFullname)  
     })
     it('Input menggunakan email yang salah', () => { 
        const wrongEmail = 'niken@'; 
        cy.get('input[type="email"]') 
           .focus() 
           .type(wrongEmail) 
           .should('have.value', wrongEmail)  
     })
     it('Input menggunakan current address yang salah', () => { 
        const wrongCurrent = 'null'; 
        cy.get('#currentAddress') 
           .focus() 
           .type(wrongCurrent) 
           .should('have.value', wrongCurrent)  
     })
     it('Input menggunakan permanent address yang salah', () => { 
        const wrongPermanent = 'null'; 
        cy.get('#permanentAddress') 
           .focus() 
           .type(wrongPermanent) 
           .should('have.value',wrongPermanent)  
     })
     it('Clik Button Submit', function(){
        cy.get('#submit').contains('Submit').click()
    })
})

