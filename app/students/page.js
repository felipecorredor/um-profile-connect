import Pagination from "@/sources/Pagination";
import PageBanner from "@/app/components/PageBanner";
import Layout from "@/sources/layout/Layout";

import StudentSearch from "@/app/components/students/list/studentSearch";
import StudentList from "@/app/components/students/list/studentList";
import ClientOnly from "@/app/components/ClientOnly";
import getStudents from "../actions/getStudents";

const StudentListPage = async () => {
  const students = await getStudents();

  if (students.length === 0) {
    return (
      <ClientOnly>
        <p>No hay estudiantes</p>
      </ClientOnly>
    );
  }

  return (
    <Layout>
      <PageBanner pageName={"Students"} />
      {/* Page Banner End */}
      {/* Course Left Start */}
      <section className="course-left-area py-130 rpy-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-4">
              <div className="course-sidebar rmb-55">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <StudentSearch />
                </div>

                <div className="widget widget-ratting wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Filter By Rating</h4>
                  <ul>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                      </div>
                      <span>(35)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(28)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(23)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(4)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(0)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="course-grids">
                <div className="shop-shorter mb-40 wow fadeInUp delay-0-2s">
                  <div className="sort-text">
                    Showing <b>85</b> Courses For 505 Course
                  </div>
                  <ul className="grid-list">
                    <li>
                      <a href="#">
                        <i className="fas fa-list-ul" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        <i className="fas fa-border-all" />
                      </a>
                    </li>
                  </ul>
                  <div className="products-dropdown">
                    <select>
                      <option value="default">Filter by</option>
                      <option value="new" selected="">
                        Latest
                      </option>
                      <option value="old">Oldest</option>
                      <option value="hight-to-low">High To Low</option>
                      <option value="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>
                <ClientOnly>
                  <StudentList students={students} />
                </ClientOnly>
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
