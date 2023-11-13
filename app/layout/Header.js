"use client";

import { useEffect, useState } from "react";
import { stickyNav } from "@/sources/utils";
import useLoginModal from "../hooks/useLoginModal";
import useRegisterModal from "../hooks/useRegisterModal";
import Header1 from "../components/layout/header1";
import DefaultHeader from "../components/layout/DefaultHeader";

const Header = ({ header, currentUser }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [navToggle, setNavToggle] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  switch (header) {
    case 1:
      return (
        <Header1
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          onOpenRegister={registerModal.onOpen}
          onOpenLogin={loginModal.onOpen}
          currentUser={currentUser}
        />
      );

    default:
      return (
        <DefaultHeader
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          onOpenRegister={registerModal.onOpen}
          onOpenLogin={loginModal.onOpen}
          currentUser={currentUser}
        />
      );
  }
};

export default Header;
