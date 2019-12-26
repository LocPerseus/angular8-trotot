export class Page {

  // tslint:disable-next-line: variable-name
  private static _iPage = 1;
  public static get iPage(): number {
    return Page._iPage;
  }
  public static set iPage(value: number) {
    Page._iPage = value;
  }
}
