import React from "react";

import styled from "styled-components";
import CustomButton from "../../Button/Button";
import { signIn } from "next-auth/react";

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const FooterContent = () => {
  return (
    <Wrapper>
      <CustomButton
        label="Continuar con Google"
        variant="primary"
        icon={<i class="fa-brands fa-google" />}
        outline
        onClick={() => signIn("google")}
      />

      <CustomButton
        label="Continuar con Github"
        variant="primary"
        icon={<i class="fa-brands fa-google" />}
        outline
        onClick={() => signIn("github")}
      />
    </Wrapper>
  );
};

export default FooterContent;
