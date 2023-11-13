import getStudents from "@/app/actions/getStudents";
import StudentCard from "../students/list/studentCard";

const GET_NUMBER_ELEMENTS = 6;

const Index1Isotope = async () => {
  const students = await getStudents(GET_NUMBER_ELEMENTS);

  return (
    <section className="coach-section rel z-1 pt-120 rpt-90 pb-100 rpb-70 bg-lighter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="section-title text-center mb-40">
              <h2>Explora Perfiles</h2>
            </div>
          </div>
        </div>

        <div className="row coach-active justify-content-center">
          {students.map((student) => (
            <StudentCard
              student={student}
              key={student.id}
              className="col-lg-4 col-md-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Index1Isotope;
