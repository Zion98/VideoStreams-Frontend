import { useState, useEffect } from "react";

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;


  // const [formValues, setFormValues] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const [errors, setErrors] = useState({
  //   firstNameError: "",
  //   lastNameError: "",
  //   emailError: "",
  //   passwordError: "",
  //   confirmPasswordError: "",
  // });

  // const validate = () => {
  //   let firstNameError = "";
  //   let lastNameError = "";
  //   let emailError = "";
  //   let passwordError = "";
  //   let confirmPasswordError = "";
  //   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //   if (!formValues.firstname.trim()) {
  //     firstNameError = "First name is required";
  //   }

  //   if (!formValues.lastname.trim()) {
  //     lastNameError = "Last name is required";
  //   }

  //   if (!formValues.email || reg.test(formValues.email) === false) {
  //     emailError = "Email Field is Invalid ";
  //   }
  //   if (!formValues.password.trim()) {
  //     passwordError = "Password field is required";
  //   }
  //   if (!formValues.confirmPassword.trim()) {
  //     confirmPasswordError = "Confirm password";
  //   }
  //   if (
  //     emailError ||
  //     firstNameError ||
  //     lastNameError ||
  //     passwordError ||
  //     confirmPasswordError
  //   ) {
  //     setErrors({
  //       firstNameError,
  //       lastNameError,
  //       emailError,
  //       passwordError,
  //       confirmPasswordError,
  //     });
  //     return false;
  //   }
  //   return true;
  // };

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   validate();
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const { firstname, lastname, email, password } = formValues;
  //   dispatch(signUp({ firstname, lastname, email, password }));
  // };
