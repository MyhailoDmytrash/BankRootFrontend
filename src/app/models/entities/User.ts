import {MoneyManipulation} from "./MoneyManipulation";
import {BaseEntity} from "./BaseEntity";

export class User extends BaseEntity
{
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly password: string;
  readonly moneyManipulations: Array<MoneyManipulation>;


  constructor(data: any) {
    super(data);
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
    this.password = data.password;

    if(data.moneyManipulations)
      this.moneyManipulations = Object.values(data.moneyManipulations).forEach(MoneyManipulation::new);
  }
}
