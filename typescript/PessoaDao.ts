import Pessoa from "./Pessoa";
import Carro from "./Carro";
import DAOInterface from "./DAOInterface";

export class PessoaDao implements DAOInterface {    
    nomeTabela: string = "tb_pessoa";

    inserir(object: Pessoa): boolean {
        console.log("lógica do insert");
        return true;
    }
    atualizar(object: Pessoa): boolean {
        console.log("lógica do update");
        return true;
    }
    remover(id: number): Pessoa {
        console.log("lógica do delete");
        return new Pessoa('','',new Carro('',0));
    }
    selecionar(id: number): Pessoa {
        console.log("lógica do select");
        return new Pessoa('','',new Carro('',0));
    }
    selecionarTodos(): [Pessoa] {
        console.log("lógica do select todos");
        return [new Pessoa('','',new Carro('',0))];
    }
}