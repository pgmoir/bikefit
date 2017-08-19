export class Cyclist {
  public firstname: string;
  public lastname: string;
  public gender: string;
  public dobDay: number;
  public dobMonth: string;
  public dobYear: number;
  public dateOfBirth: number;

  constructor(firstname: string, lastname: string, gender: string, dobDay: number, dobMonth: string, dobYear: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.dobDay = dobDay;
    this.dobMonth = dobMonth;
    this.dobYear = dobYear;
  }
}
