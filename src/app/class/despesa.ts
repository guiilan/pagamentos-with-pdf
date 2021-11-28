export class Despesa {
    placa: string;
    modelo: string;
    locatario: string;
    valor: number;
    descricao: string;
    tipo: string;

    constructor(placa?: string, modelo?: string, locatario?: string, valor?: number, descricao?: string,  tipo?: string){
        this.placa = placa,
        this.modelo= modelo;
        this.locatario= locatario;
        this.valor= valor;
        this.descricao= descricao;
        this.tipo= tipo;
    }
}
