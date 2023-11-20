import React from "react";
import Link from "next/link";
import Image from "next/image";

const StudentCard = ({ student, className = "col-md-6 item" }) => {
  return (
    <div className={className}>
      <div className="coach-item wow fadeInUp delay-0-4s">
        <div className="coach-image">
          <span className="category">UM</span>
          <Image
            src={student.imageSrc}
            alt="Coach"
            width={300}
            height={300}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="coach-content">
          <span className="label">{student.position}</span>
          <h4>
            <Link
              href={{
                pathname: "/student",
                query: { studentId: student.id },
              }}
            >
              {student.firstName} {student.lastName}
            </Link>
          </h4>
          <div className="ratting-price"></div>
          <ul className="coach-footer">
            <li>
              <i className="far fa-file-alt" />
              <span>{student.semester} semestre</span>
            </li>
            <li>
              <i className="far fa-user" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
