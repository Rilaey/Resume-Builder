import React, { useState } from "react";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Resume Builder
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="bg-base-100">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/signUp">Sign Up</a>
                </li>
                <li>
                  <a href="/signIn">Sign In</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
