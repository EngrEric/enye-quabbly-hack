import { Hub } from "@aws-amplify/core";
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    Hub.listen("auth", (data) => {
      if (data.payload.event === "signIn") {
        history.push("/dashboard");
        window.location.reload()
      }
      if (data.payload.event === "signOut") {
        history.push("/login");
        window.location.reload()
      }
    });
  }, []);
  return (
    <div>
      <AmplifyAuthContainer>
        <AmplifyAuthenticator
          color="red"
          slot=""
          formFields={[
            {
              type: "email",
              inputProps: { required: true, autocomplete: "username" },
            },
            {
              type: "password",
              inputProps: { required: true, autocomplete: "new-password" },
            },
            {
              type: "phone_number",
              inputProps: { required: true, autocomplete: "phone-no" },
            },
          ]}
        ></AmplifyAuthenticator>
      </AmplifyAuthContainer>
    </div>
  );
};

export default Login;
