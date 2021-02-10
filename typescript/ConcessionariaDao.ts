import Concessionaria from "./Concessionaria";
import DAOInterface from "./DAOInterface";

export class ConcessionariaDao implements DAOInterface {    
    nomeTabela: string = "tb_concessionaria";

    inserir(object: Concessionaria): boolean {
        console.log("lógica do insert");
        return true;
    }
    atualizar(object: Concessionaria): boolean {
        console.log("lógica do update");
        return true;
    }
    remover(id: number): Concessionaria {
        console.log("lógica do delete");
        return new Concessionaria('',[]);
    }
    selecionar(id: number): Concessionaria {
        console.log("lógica do select");
        return new Concessionaria('',[]);
    }
    selecionarTodos(): [Concessionaria] {
        console.log("lógica do select todos");
        return [new Concessionaria('',[])];
    }
}