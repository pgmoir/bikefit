export class Cyclist {
  public firstname: string;
  public lastname: string;
  public gender: string;
  public dateOfBirth: number;

  constructor(firstname: string, lastname: string, gender: string, dateOfBirth: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
  }
}
