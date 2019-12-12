import { News } from './../shared/News.model';
export class DataNews {
  // constructor(page: number, pageSize: number, totalPage: number, data: DataNews[]) {
  //   this.page = page;
  //   this.pageSize = pageSize;
  //   this.totalPage = totalPage;
  //   this.data = data;
  // }
  constructor(
    public page: number,
    public pageSize: number,
    public totalPage: number,
    public data: News[]
  ) {}
}
