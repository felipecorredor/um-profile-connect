import StudentSearch from "@/app/components/students/list/studentSearch";

import Layout from "../layout/Layout";
import PageBanner from "../components/PageBanner";
import Pagination from "@/sources/Pagination";
import StudentList from "./studentList";
import { Suspense } from "react";
import Loading from "../loading";
import getCurrentUser from "../actions/getCurrentUser";

const StudentListPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Layout currentUser={currentUser}>
      <PageBanner pageName="Estudiantes" />
      <section className="course-left-area py-130 rpy-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-4">
              <div className="course-sidebar rmb-55">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <StudentSearch />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="course-grids">
                <Suspense fallback={<Loading />}>
                  <StudentList />
                </Suspense>
                <ul className="pagination flex-wrap mt-20">
                  <Pagination
                    paginationCls={".course-grids .row .col-md-6"}
                    sort={8}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default StudentListPage;
