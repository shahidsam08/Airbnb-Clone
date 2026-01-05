import * as yup from "yup";

export const SignupSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address!")
    .trim()
    .required("Email is required!"),
  username: yup.string().required("User name is required!"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be Strong!"
    ),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match!")
    .required("Password is required!"),
});




// oneof([yup.ref("password")]) : check the password and match with the checkpassword if both are not equal it gives error like password must match.