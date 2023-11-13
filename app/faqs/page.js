import Layout from "../layout/Layout";

import PageBanner from "../components/PageBanner";
import getCurrentUser from "../actions/getCurrentUser";
import FaqsContent from "../components/faqs/Content";

const FaqCards = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Layout currentUser={currentUser}>
      <PageBanner pageName={"Preguntas frecuentes"} />
      <section className="FaqCards-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title-two">Tienes alguna pregunta?</span>
            <h2>Preguntas frecuentes</h2>
          </div>
          <FaqsContent />
        </div>
      </section>
    </Layout>
  );
};
export default FaqCards;
