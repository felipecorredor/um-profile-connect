import "./globals.css";
import ClientOnly from "@/app/components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal/LoginModal";
import RegisterModal from "./components/modals/RegisterModal/RegisterModal";

export const metadata = {
  title: "Profile Connect",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        {/*====== Google Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*====== Flaticon ======*/}
        <link rel="stylesheet" href="assets/css/flaticon.min.css" />
        {/*====== Font Awesome ======*/}
        <link rel="stylesheet" href="assets/css/font-awesome-5.9.0.min.css" />
        {/*====== Bootstrap ======*/}
        <link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
        {/*====== Magnific Popup ======*/}
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        {/*====== Nice Select ======*/}
        <link rel="stylesheet" href="assets/css/nice-select.min.css" />
        {/*====== jQuery UI ======*/}
        {/* <link rel="stylesheet" href="assets/css/jquery-ui.min.css" /> */}
        {/*====== Animate ======*/}
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        {/*====== Slick ======*/}
        <link rel="stylesheet" href="assets/css/slick.min.css" />
        {/*====== Main Style ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>
      <body>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
        </ClientOnly>
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
