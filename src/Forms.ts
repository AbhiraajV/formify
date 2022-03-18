import { AiTwotoneMail } from "react-icons/ai";
export default [
  {
    title: "Login",
    inputs: [
      {
        type: "email",
        name: "Email",
        placeholder: "Enter your Email ",
        icon: {
          icon: AiTwotoneMail,
          iconStyle: { height: "24px", width: "24px", color: "pink" },
        },
      },
      // {
      //   type: "email",
      //   name: "Email",
      //   placeholder: "Enter your Email ",
      //   icon: AiTwotoneMail,
      // },
    ],
  },
  // {
  //   title: "Registration",
  //   inputs: [
  //     {
  //       type: "password",
  //       name: "Password",

  //     },
  //   ],
  // },

  // {
  //   title: "Another",
  //   inputs: [
  //     {
  //       type: "text",
  //       name: "Text",
  //     },
  //   ],
  // },
];
