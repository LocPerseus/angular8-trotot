import { Account } from './account';
export class DataUser {
  constructor(
    public page: number,
    public pageSize: number,
    public totalPage: number,
    public data: Account[]
  ) {}
}
