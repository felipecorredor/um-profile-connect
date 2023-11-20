import Link from "next/link";
import styled from "styled-components";

const Menus = ({ currentUser }) => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">Acerca</Link>
    </li>
    <li>
      <Link href="/faqs">Preguntas</Link>
    </li>
    <li>
      <Link href="/students">Estudiantes</Link>
    </li>

    {currentUser && (
      <li>
        <LinkRef href="/curriculum">Crear perfil</LinkRef>
      </li>
    )}
  </ul>
);

export default Menus;

const LinkRef = styled(Link)`
  color: #00cc83 !important;
`;
