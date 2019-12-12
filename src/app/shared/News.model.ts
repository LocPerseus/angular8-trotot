export class News {
  constructor(
    public status: number,
    public image: [],
    // tslint:disable-next-line: variable-name
    public _id: string,
    public title: string,
    public description: string,
    public price: number,
    public area: number,
    // tslint:disable-next-line: variable-name
    public id_account: string,
    public createDay: Date
    ) {}

}
