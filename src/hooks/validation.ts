
  interface signUpdetails {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword:string;
  }

export default function validateInfo(values:signUpdetails) {
  let errors = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (!values.firstname.trim()) {
    errors.firstname = "First Name required";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "First Name required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
}
