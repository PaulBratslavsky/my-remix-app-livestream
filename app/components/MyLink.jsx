import React from "react";
import { Link } from "@remix-run/react";
export default function MyLink({ to, children }) {
  return (
    <Link to={to} className="text-xl text-blue-600 underline">
      {children}
    </Link>
  );
}
