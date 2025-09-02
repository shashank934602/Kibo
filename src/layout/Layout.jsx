import React from "react";
import Navbar from "../components/Navbar";

function Layout({ children, user, logout }) {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Navbar */}
      <Navbar user={user} logout={logout} />

      {/* Page Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer (optional) */}
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <aside>
          <p>© 2025 KiboTech. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default Layout;
