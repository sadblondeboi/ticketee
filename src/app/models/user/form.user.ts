import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserFormControl extends FormControl {
    label: string;
    modelProperty: string;

    constructor(label: string,
                modelProperty: string,
                value: any,
                validator: any) {
                    super(value, validator);
                    this.label = label,
                    this.modelProperty = modelProperty;
                }

    getValidationMessages(): string[] {
        let messages: string[] = [];
        if (this.errors) {
            // tslint:disable-next-line: forin
            for (const errorName in this.errors) {
                switch (errorName) {
                    case 'required':
                        messages.push(`Proszę podać wartość w polu ${this.label}.`);
                        break;
                    case 'minlength':
                        // tslint:disable-next-line: no-string-literal
                        messages.push(`Wymagane jest podane przynajmniej ${this.errors['minlength'].requiredLength} znaków.`);
                        break;
                    case 'maxlength':
                        // tslint:disable-next-line: no-string-literal
                        messages.push(`Można wprowadzić maksymalnie ${this.errors['maxlength'].requiredLength} znaków.`);
                        break;
                    case 'pattern':
                        messages.push(`Wprowadzone dane zawierają niedozwolone znaki.`);
                        break;
                }
            }
        }
        return messages;
    }
}



export class UserFormGroup extends FormGroup {
    constructor() {
        super({
            emailAdress: new UserFormControl('Email adress', 'emailAdress', '', Validators.compose([
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
                Validators.minLength(2),
                Validators.maxLength(50)
            ])),

            password: new UserFormControl('Password', 'password', '', Validators.compose([
                Validators.required,
                Validators.pattern('.{8,}'),
                Validators.minLength(5),
                Validators.maxLength(50)
            ])),

            firstName: new UserFormControl('First name', 'firstName', '', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z ]+$'),
                Validators.minLength(2),
                Validators.maxLength(50)
            ])),

            secondName: new UserFormControl('Second name', 'secondName', '', Validators.compose([
                Validators.required,
                Validators.pattern('[A-Za-z ]+$'),
                Validators.minLength(2),
                Validators.maxLength(50)
            ])),

        });
    }
    // I know it's not the best solution but it's only for testing purposes
    get userControls(): UserFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as UserFormControl);
    }

    getFormValidationMessages(form: any): string[] {
        let messages: string[] = [];
        this.userControls.forEach(c  => c.getValidationMessages()
            .forEach(m => messages.push(m)));
        return messages;
    }
}
