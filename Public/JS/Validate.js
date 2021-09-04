class Validator {
  constructor() {}
  isName(name) {
    /*
      Tests so names ONLY have letters.
    */
    return /^[A-Za-z]+$/.test(name);
  }
  isEmail(email) {
    /*
      Tests for emails with the following extensions:
      -- .com, .net, .org, .io, .edu, .co.uk, .me, .tech, & .money
    */
    return /[^@]+@[^@]+[\.]+(com|net|org|io|edu|(co.uk)|me|tech|money)+$/.test(email);
  }

  isCompany(companyName) {
    /*
      Puts the company name through a test to see if it can pass.  This one will be updated regularly upon client resonses to their particular company.  Hopefully, it will stand to the test it needs to.
    */
    return /^[^?!*,#,%,*,+,=]*^[^?!*,#,%,*,+,=]*$/.test(companyName);
  }

  isCompanyPosition(position) {
    /*
      Puts the employee's position name through a test to see if it can pass.  This one will be updated regularly upon client resonses to their particular company.  Hopefully, it will stand to the test it needs to.
    */
    return /^[A-Za-z\ \\\/\-\_\d]*^[^?!*,#,%,*,+,=]*$/.test(position);
  }
}

export const Validate = new Validator();

// firstName: /^[A-Za-z]+$/,
// lastName: /^[A-Za-z]+$/,
// username: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
// password: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
// repeatPassword: /(?=[\w]*[A-Z])(?=[\w]*[\w])(?=[\w]*[\d])/,
// email: /[^@]+@[^@]/
