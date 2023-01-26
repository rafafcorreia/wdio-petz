const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');
const ProductPage = require('../pageobjects/ProductPage');

/* const pages = {
    login: LoginPage,
    home: HomePage,
    product: ProductPage
} */

Given('que estou na pagina de login', async () => {
    await LoginPage.btnEntrarSemLogin.waitForDisplayed();
})

When('eu clico em Começar sem login', async () => {
    await LoginPage.entrarSemLogin();
})

When('busco por {string}', async (texto) => {
    await HomePage.pesquisarProduto(texto);
})

When('clico na primeira opcao', async () => {
    await HomePage.primeiraOpcao.waitForDisplayed();
    await HomePage.clicarPrimeiraOpcao();
})

Then('aparece o produto {string}', async (titulo) => {
    await ProductPage.tituloProduto.waitForDisplayed();
    expect(await ProductPage.tituloProduto.getText()).toEqual(titulo);
})
