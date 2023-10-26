import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ListNLease. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
