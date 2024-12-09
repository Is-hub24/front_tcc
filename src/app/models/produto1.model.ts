import { IImage } from "./image.model";

export interface IProduto1 {
    "id_produtos": bigint,
    "nome": string,
    "descricao": string,
    "quantidade": number,
    "preco": number,
    "id_categoria": bigint,
    "image": IImage
}