import { formValid } from './formValidation.js'

var a = new formValid();
console.log(a);
a.setMandatory("firstname", true);
a.setReadOnly("firstname", true);