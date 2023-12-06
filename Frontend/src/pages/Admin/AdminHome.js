import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
           Managing rare blood groups efficiently when needed by patients in a timely manner is a critical challenge in the healthcare industry. Existing solutions often lack user-friendliness and accessibility, leading to delays in blood transfusions and potential life-threatening situations. This project aims to address this issue by creating a Hematology Management Website equipped with a User Interface (UI) and User Experience (UX) research tool. This solution will simplify the process of finding rare blood donors, improving patient outcomes and saving lives.

Managing blood donation drives manually can lead to various challenges, including:
Difficulty in maintaining an updated donor database.
Inefficient communication between donors and recipients.
Lack of real-time information on blood availability.
Limited reach and engagement with potential donors.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
