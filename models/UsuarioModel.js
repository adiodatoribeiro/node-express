class UsuarioModel {

    static lista = [
        {
            id: 1,
            nome: "Administrador",
            login: "adm",
            senha: "123456"
        },
        {
            id: 2,
            nome: "teste",
            login: "teste",
            senha: "123456"
        }
    ];

    static authenticate(login, senha) {
        const indice = UsuarioModel.lista.findIndex(item => item.login == login && item.senha == senha);
        return UsuarioModel.lista[indice];
    }

    static consultarPorId(id) {
        const dados = UsuarioModel.lista.filter(item => item.id == id);
        return dados;
    }

    static criar(data) {
        UsuarioModel.lista.push(data)
    }

    static atualizar(id, data) {

        const indice = UsuarioModel.lista.findIndex(item => item.id == id);
        UsuarioModel.lista[indice] = data;
    }

    static deletar(id) {
        const dados = UsuarioModel.lista.filter(item => item.id != id);
        UsuarioModel.lista = dados;
    }
}

module.exports = UsuarioModel;