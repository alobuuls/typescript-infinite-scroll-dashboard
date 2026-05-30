interface IUnsplashOpts {
  endpoint: string;
}

interface IUrlBuildResp {
  url: URL;
  opts: RequestInit;
}

class Api {

  apiKey: string = import.meta.env.VITE_UNSPLASH_KEY;
  endpoint: string;
  
  constructor({ endpoint }: IUnsplashOpts) {
    console.log(this.apiKey);
    this.endpoint = endpoint;
  }

  buildUrl(method:string, params?: Record<string, string>): IUrlBuildResp {
    const url = new URL(this.endpoint);
    const headers = new Headers();

    headers.set('Authorization', `Client-ID ${this.apiKey}`);
    headers.set('Content-Type', 'application/json');

    if (params) {
      url.search = new URLSearchParams(params).toString();
    }

    return {
      url,
      opts: { method, headers}
    };
  }

  async getData<TResp, TResult = TResp>(params?: Record<string, string>, transform?: (data: TResp) => TResult): Promise<TResult> {
    const { opts, url } = this.buildUrl('GET', params);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    const data: TResp = await res.json();
    return transform ? transform(data) : (data as unknown as TResult);
  }
}

export { Api };