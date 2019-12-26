export class Account {
  public status: string;
  public role: string;
  // tslint:disable-next-line: variable-name
  public _id: string;
  public username: string;
  // tslint:disable-next-line: variable-name
  public hash_password: string;
  // tslint:disable-next-line: variable-name
  public salt_password: string;
  public createdDay: Date;
}
