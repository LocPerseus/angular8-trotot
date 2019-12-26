import { Account } from './account';
export class User {
  public favourite: [];
  // tslint:disable-next-line: variable-name
  public _id: string;
  // tslint:disable-next-line: variable-name
  public id_account: Account[];
  public displayName: string;
  public createdDay: Date;
  public email: string;
  public address: string;
  public gender: string;
  public avatar: string;
  public phoneNumber: string;
  public identityCard: string;
  public birthday: Date;
}
