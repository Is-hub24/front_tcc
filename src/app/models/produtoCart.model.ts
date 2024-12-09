import { IImage } from "./image.model";

export interface IProdutoCart {
    id: bigint,
    name: string,
    image: IImage,
    description: string,
    quantity: number,
    price: number,
}