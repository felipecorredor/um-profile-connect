"use client";

import { Accordion, Nav, Tab } from "react-bootstrap";

import FaqCard from "@/sources/components/faqs/faqCard";
import PageBanner from "@/sources/components/PageBanner";
import Layout from "@/sources/layout/Layout";

const FaqCards = () => {
  return (
    <Layout>
      <PageBanner pageName={"Preguntas frecuentes"} />
      <section className="FaqCards-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="section-title mb-35">
            <span className="sub-title-two">Tienes alguna pregunta?</span>
            <h2>Preguntas frecuentes</h2>
          </div>
          <Tab.Container defaultActiveKey={"tabContent1"}>
            <Nav className="nav FaqCards-tab mb-40">
              <li>
                <Nav.Link eventKey={"tabContent1"} href="#tabContent1">
                  Preguntas
                </Nav.Link>
              </li>
            </Nav>
            <Tab.Content className="tab-content FaqCard-accordion">
              <Tab.Pane className="tab-pane fade" eventKey="tabContent1">
                <Accordion defaultActiveKey="a1">
                  <FaqCard />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent2">
                <Accordion defaultActiveKey="a1">
                  <FaqCard />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent3">
                <Accordion defaultActiveKey="a1">
                  <FaqCard />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent4">
                <Accordion defaultActiveKey="a1">
                  <FaqCard />
                </Accordion>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabContent5">
                <Accordion defaultActiveKey="a1">
                  <FaqCard />
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </Layout>
  );
};
export default FaqCards;
