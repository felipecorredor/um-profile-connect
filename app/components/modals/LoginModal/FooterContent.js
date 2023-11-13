import React from "react";

import styled from "styled-components";

import { signIn } from "next-auth/react";
import CustomButton from "../../Button/Button";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const FooterContent = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const onToggle = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  return (
    <Wrapper>
      <CustomButton
        label="Continuar con Google"
        variant="primary"
        icon={<i class="fab fa-google"></i>}
        outline
        onClick={() => signIn("google")}
      />

      <CustomButton
        label="Continuar con Github"
        variant="primary"
        icon={<i class="fab fa-github"></i>}
        outline
        onClick={() => signIn("github")}
      />

      <Container>
        <Text>Primera vez usando Profile Connect?</Text>
        <Link onClick={onToggle}>Crea una cuenta</Link>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  margin-top: 4px;
  font-weight: light;
  color: #666;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Text = styled.p`
  margin: 0;
`;

const Link = styled.span`
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default FooterContent;
