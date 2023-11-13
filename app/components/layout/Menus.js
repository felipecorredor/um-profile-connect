import Link from "next/link";

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

    {currentUser && (
      <>
        <li>
          <Link href="/students">Estudiantes</Link>
        </li>
        <li>
          <Link href="/curriculum">Crear perfil</Link>
        </li>
      </>
    )}
  </ul>
);

export default Menus;
