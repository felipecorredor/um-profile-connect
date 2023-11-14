"use client";

import React from "react";
import FaqCard from "./FaqCard";

import { Accordion, Nav, Tab } from "react-bootstrap";

const FaqsContent = () => {
  return (
    <Tab.Container defaultActiveKey={"tabContent1"}>
      <Nav className="nav FaqCards-tab mb-40">
        <li>
          <Nav.Link eventKey={"tabContent1"} href="#tabContent1">
            Preguntas
          </Nav.Link>
        </li>
      </Nav>

      <Tab.Content className="tab-content faq-accordion">
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
  );
};

export default FaqsContent;
