"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StudentCard = ({ student }) => {
  const router = useRouter();

  return (
    <div className="col-md-6">
      <div className="coach-item wow fadeInUp delay-0-4s">
        <div className="coach-image">
          <Link className="category" href="/course-grid">
            Lifestyle
          </Link>
          <img src="/assets/images/coachs/coach1.jpg" alt="Coach" />
        </div>
        <div className="coach-content">
          <span className="label">Basic Coach</span>
          <h4>
            <Link
              href={{
                pathname: "/student",
                query: { studentId: student.id },
              }}
            >
              Learn How to Manage Your Lifestyle
            </Link>
          </h4>
          <div className="ratting-price">
            <div className="ratting">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <span>(3k)</span>
            </div>
            <span className="price">256.95</span>
          </div>
          <ul className="coach-footer">
            <li>
              <i className="far fa-file-alt" />
              <span>12 Lessions</span>
            </li>
            <li>
              <i className="far fa-user" />
              <span>seats</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
