interface IUIOpts<T extends any[]> { 
  api: (page: number ) => Promise<T>;
  container: HTMLElement;
  render: (item: T[number]) => any;
  isInfiniteScroll?: boolean;
}

class UI<T extends any[]> {
  
  private api: (page: number ) => Promise<T>;
  private isInfiniteScroll:boolean;
  private container: HTMLElement;
  private render: (item: T[number]) => HTMLElement;
  private isLoading: boolean = false;
  private page: number = 1;
  private observer!: IntersectionObserver; 
  private sentinel: HTMLElement | null = null;

  constructor({ api, container, render, isInfiniteScroll = false }: IUIOpts<T>) {
    this.api = api;
    this.container = container;
    this.render = render;
    this.isInfiniteScroll = isInfiniteScroll;
    this.initObserver();
  }

  private initObserver() {
    if ( !this.isInfiniteScroll ) return;
    this.sentinel = document.createElement('div');
    this.sentinel.className = 'sentinel';
    const loader = document.createElement('span');
    loader.textContent = '↻';
    this.sentinel.appendChild(loader);
    this.container.appendChild(this.sentinel);
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting && !this.isLoading) setTimeout(() => this.loadMore(), 1000);
    });

    this.observer.observe(this.sentinel);
  }

  private async loadMore() {
    try {
      this.isLoading = true;
      const data = await this.api(this.page);

      if ( data.length === 0 ) {
        this.observer.disconnect();
        return;
      };

      const fragment = document.createDocumentFragment();
      data.forEach(item => fragment.append(this.render(item)));
      this.container.insertBefore(fragment, this.sentinel);

      this.page++;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  public init() {
    this.loadMore()
  }
}

export { UI };