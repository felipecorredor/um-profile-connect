import StudentSearch from "@/app/components/students/list/studentSearch";

import Layout from "../layout/Layout";
import PageBanner from "../components/PageBanner";
import Pagination from "@/sources/Pagination";
import StudentList from "./studentList";
import { Suspense } from "react";
import Loading from "../loading";

const StudentListPage = async () => {
  return (
    <Layout>
      <PageBanner pageName={"Students"} />
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
