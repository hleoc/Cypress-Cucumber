import cadastroUsuario from "./cadastroUsuario_page";

Given(/^que estou na tela de cadastro$/, () => {
	cadastroUsuario.acessarPagina
});

When(/^realizo o cadastro do usuário com sucesso$/, () => {
	cadastroUsuario.realizarCadastro
});

Then(/^o cadastro do usuário é realizado$/, () => {
	return true;
});
