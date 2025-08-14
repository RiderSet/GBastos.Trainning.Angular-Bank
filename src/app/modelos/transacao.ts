import { nanoid } from "nanoid";

export class Transacao {
readonly id = nanoid();
readonly data = new Date();

  constructor(
    public tipo: string,
    public valor: number
  ) {}  
}

export enum TipoTransacao {
    DEPOSITO = "Depósito ",
    SAQUE = "Saque "
}