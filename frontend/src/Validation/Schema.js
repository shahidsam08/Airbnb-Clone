import * as yup from "yup";

export const SignupSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email address!")
    .trim()
    .required("Email is required!"),
  username: yup
    .string()
    .min(4, "Minimum 4 characters long!")
    .required("User name is required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Your password should have 8+ characters, including uppercase, lowercase, a number, and a symbol."
    )
    .required("Password is required!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match!")
    .required("Confirm password is required"),
});



// validation schema for the login.

export const loginSchema = yup.object({
  email: yup.string().email("Email should be valid").required("Email is required!"),
  password: yup.string().required("Password is required!")
})

// oneof([yup.ref("password")]) : check the password and match with the checkpassword if both are not equal it gives error like password must match.
