////////////////////////////////////////////
//  Core Modules

////////////////////////////////////////////
//  Third Party Modules

////////////////////////////////////////////
//  Third Party Module Instances

////////////////////////////////////////////
//  Third Party Config Files

////////////////////////////////////////////
//  Third Party Middleware

////////////////////////////////////////////
//  My Middleware

////////////////////////////////////////////
//  Routing Middleward

////////////////////////////////////////////
//  My Modules

/////////////////////////////////////////
//  Validator Model
class Validator {
  constructor() {}
  isName(name) {
    return /^[A-Za-z]+$/.test(name);
  }
  isEmail(email) {
    return /[^@]+@[^@]+[\.]+(com|net|org|io|edu|(co.uk)|me|tech|money)+$/.test(email.toLowerCase());
  }
  isValidEmailSubject(subject) {
    return /^[^`,@,^,&,+,=,<,>,{,},[,\],;,]*^[^`,@,^,&,+,=,<,>,{,},[,\],;,]+$/.test(subject);
  }
  isCompany(companyName) {
    return /^[^?!*,#,%,*,+,=]*^[^?!*,#,%,*,+,=]*$/.test(companyName);
  }
  isCompanyPosition(position) {
    return /^[^<,>,|,\[,\],?,!,`,~,!,@,#,$,%,^,&,*,+,=,;]*^[^<,>,|,\[,\],?,!,`,~,!,@,#,$,%,^,&,*,+,=,;]*$/.test(position);
  }
}

module.exports = Validate = new Validator();
