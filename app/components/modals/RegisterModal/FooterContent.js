import React from "react";
import Button from "../../Button/Button";

const FooterContent = () => {
  return (
    <div className="">
      <Button
        label="Continuar con Google"
        variant="primary"
        icon={<i class="fa-brands fa-google" />}
        outline
      />

      <Button
        label="Continuar con Github"
        variant="primary"
        icon={<i class="fa-brands fa-google" />}
        outline
      />
    </div>
  );
};

export default FooterContent;
