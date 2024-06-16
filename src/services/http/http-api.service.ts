import { HttpMethod } from "./common/enums/http-method.enum";
import { HttpOptions } from "./common/types/http-options/http-options.type";

class HttpApi {
    public async load<T>(
        url: string, 
        options: Partial<HttpOptions> = {}
    ) {
        const {
            method = HttpMethod.GET,
            payload = null
        } = options;

        try {
            const res = await fetch(url, {
                method,
                body: payload
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            return await res.json() as T;
        } catch(err) {
            throw err;
        }
    }
}

export default HttpApi;