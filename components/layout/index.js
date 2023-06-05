import React from "react";

export default function Layout({ children }) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-8 bg-stone-100">
        <nav className="container flex flex-row gap-16 text-stone-400 uppercase text-xl">
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
        </nav>
      </header>

      <main className="flex-grow container">{children}</main>

      <footer className="bg-stone-100 py-8">
        <div className="container flex flex-row gap-4 items-center  text-stone-400"><span className="text-xl" >©</span><label>All Rights Reserved 2023</label></div>
      </footer>
    </div>
  );
}
