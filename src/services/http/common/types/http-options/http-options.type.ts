import { ValueOf } from "../../../../../common/generic/value-of/value-of.type";
import { HttpMethod } from "../../enums/http-method.enum";

type HttpOptions = {
    method: ValueOf<typeof HttpMethod>;
    payload: BodyInit | null;
    
}

export { type HttpOptions };