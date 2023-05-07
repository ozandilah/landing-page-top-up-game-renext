import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

export default function SideBar() {
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="icon-menu-overview" active />
            <MenuItem title="Transactions" icon="icon-transactions" />
            <MenuItem title="Messages" icon="icon-message" />
            <MenuItem title="Card" icon="icon-card" />
            <MenuItem title="Rewards" icon="icon-rewards" />
            <MenuItem title="Settings" icon="icon-settings" />
            <MenuItem title="Logout" icon="icon-logout" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
