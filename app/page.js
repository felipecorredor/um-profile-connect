import dynamic from "next/dynamic";

import Layout from "./layout/Layout";

import getCurrentUser from "./actions/getCurrentUser";

import InstagramSection from "./components/home/InstagramSection";
import AboutSection from "./components/home/AboutSection";
import FeatureSection from "./components/home/FeatureSection";
import HeroSection from "./components/home/HeroSection";
import WorkProcessSection from "./components/home/WorkProcessSection";

const Index1Isotope = dynamic(
  () => import("@/app/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Layout header={1} footer={1} currentUser={currentUser}>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* About Section */}
      <AboutSection />
      {/* Coach Section */}
      <Index1Isotope />
      {/* Work Process Section */}
      <WorkProcessSection />
      {/* Instagram Section */}
      <InstagramSection />
    </Layout>
  );
};
export default Home;
