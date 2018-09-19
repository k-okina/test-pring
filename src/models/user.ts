import * as Pring from 'k-okina-test-pring';

const property = Pring.property;

export class User extends Pring.Base {
    @property public name?: string;
}
