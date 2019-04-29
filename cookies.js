function setCookieNome(nome, email, assunto) {
	//Criar objeto do tipo Date()
	var data = new Date();
	//Configurando tempo de vida do cookie
	data.setTime(data.getTime() + 600000);
	//Criando a estrutura do cookie
	document.cookie = "cookie01="+nome+"; expires="+data.toUTCString()+"; path=/";
	alert("Cookie criado com sucesso!");
	document.cookie = "cookie02="+email+"; expires="+data.toUTCString()+"; path=/";
	alert("Cookie criado com sucesso!");
	document.cookie = "cookie03="+assunto+"; expires="+data.toUTCString()+"; path=/";
	alert("Cookie criado com sucesso!");
}