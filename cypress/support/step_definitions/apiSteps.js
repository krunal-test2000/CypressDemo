/// <reference types="cypress" />
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When("I send a GET request to the API endpoint and should receive a successful response", function () {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response) => {
        expect(response.status).to.eq(200);
        const title = response.body.title;
        cy.writeFile('cypress/fixtures/title.json', { title: title });

    });
});

Then("I extract the title field from the response body", function () {
    cy.readFile('cypress/fixtures/title.json').then((data) => {
        cy.log('Extracted title from file:', data.title);
    });
});

When("I send a Post request to the API endpoint and should receive a successful response", function () {
    cy.request({
        method: "Post",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: ({
            title: 'Krunal',
            body: 'Test Payload body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json',
        }

    })
        .then((response) => {
            expect(response.status).to.eq(201);
            const Body = response.body.body
            cy.log("fetch : " + Body)
            cy.writeFile('cypress/fixtures/Body.json', { MyBody: Body });
        });
});

Then("I extract the body field from the response body", function () {
    cy.readFile('cypress/fixtures/Body.json').then((data) => {
        cy.log('Extracted Body from file:' + data.MyBody);
    });
});
