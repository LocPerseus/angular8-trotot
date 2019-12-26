import { News } from './../shared/News.model';
export class DataNews {
  constructor(
    public page: number,
    public pageSize: number,
    public totalPage: number,
    public data: News[]
  ) {}
}
