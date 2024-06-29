import { type Asset } from "../entities";

type Coin = Pick<Asset, 'id' | 'name' | 'symbol' | 'image' | 'price'>;

export { type Coin };
