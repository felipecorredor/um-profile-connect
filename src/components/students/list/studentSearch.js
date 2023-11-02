"use client";

import React from "react";

const StudentSearch = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} action="#">
      <input type="text" placeholder="Search Here" required="" />
      <button type="submit" className="searchbutton fa fa-search" />
    </form>
  );
};

export default StudentSearch;
