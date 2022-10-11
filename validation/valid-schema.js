import Yup from "./valid";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  full_name: Yup.string().required(),
  username: Yup.mixed()
    .required()
    .test({
      message: "Geçerli bir kulanıcı adı girin!",
      test: (str) => /^[a-z0-9\.\_]+$/i.test(str),
    }),
  password: Yup.string().required(),
});
