import login from './login_page'


Given(/^que estou na página de login$/, () => {
	login.acessarPagina
});

When(/^realizo o login do usuario sem sucesso$/, () => {
	login.fazerLogin
});

Then(/^login do usuario não é realizado$/, () => {
	login.resultadoLogin
});
