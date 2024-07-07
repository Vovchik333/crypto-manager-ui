import { type Asset } from "../entities";

type Coin = Pick<Asset, 'id' | 'name' | 'image' | 'symbol' | 'currentPrice'>;

export { type Coin };
