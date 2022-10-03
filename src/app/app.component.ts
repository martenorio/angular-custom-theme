import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public myForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: new FormControl('', [
        // validaciones síncronas
        Validators.required,
        Validators.email
      ], [
        // validaciones asíncronas
      ]),
      password: new FormControl('')
    })

  }

  ngOnInit() {
    this.doSomething()
  }

  doSomething(){
    console.log(this.myForm.valid,this.myForm.value)
  }
  validInput(form:FormGroup, element:string, errorType:string = ''){
    //const input =
    if(!form.get(element)?.touched) return true;
    if(!Boolean(errorType)) return !form.get(element)?.hasError('required');
    return !form.get(element)?.hasError(errorType);


    return
    // console.log(input);
    // if(!input.touched) return true;
    // if(!Boolean(errorType)) return input.errors['required'];
    // return (!input.errors || input.errors[errorType] === true ) ? false: true;
    
  }
  validForm(form:FormGroup){
    Object.keys(form.controls).forEach((key: string) => {
        const abstractControl = form.controls[key];

        if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
          //this.markControlsDirty(abstractControl);
        } else {
            abstractControl.markAsDirty();
        }
      });
  }
}
