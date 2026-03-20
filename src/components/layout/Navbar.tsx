"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu ,X } from 'lucide-react';


export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a0c16] border-b border-white/5 sticky top-0 z-20 backdrop-blur-md">

      <nav className="max-w-7xl mx-auto flex items-center justify-between  gap-10 px-6 h-[75px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3  ">
          <Image src="/img/logo.png" alt="logo" width="40" height="40" className="h-full w-full"/>
          <span className="text-2xl font-bold text-white">BSERC</span>
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <span className="text-2xl">{isMobileOpen ? <X/> : <Menu/> }</span>
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed md:static inset-x-0 top-[64px] bg-[#0a0c16] md:bg-transparent
          flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-6 
          p-6 md:p-0 text-[14px] font-medium text-gray-300 transition-all
          ${isMobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto"}
        `}>
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About Us</NavLink></li>

          
          {/* Institutions Dropdown */}
          <NavDropdown title="Institutions">
            <SubLink href="/institutions/mou-form">MoU</SubLink>
            <SubLink href="/institutions/collaboration">Collaboration</SubLink>
          </NavDropdown>

          {/* program */}
          <NavDropdown title="Programme">
            <SubLink  href="/institutions/mou-form">One Day Workshop</SubLink>
            <SubLink  href="/institutions/collaboration">All Programs</SubLink>
          </NavDropdown>

          {/* Career Dropdown */}
          <NavDropdown title="Career">
            <SubLink href="/summer-internship">Summer Internship</SubLink>
            <SubLink href="/winter-internship">Winter Internship</SubLink>
            <SubLink href="/job-vacancy">Job Vacancies</SubLink>
          </NavDropdown>

          {/* More Dropdown with Nested Submenus */}
          <NavDropdown title="More">
            <SubLink href="/advisory-board">Advisory Body</SubLink>
            
            {/* NESTED HOVER: People */}
            <li className="relative group/nested">
              <div className="flex items-center justify-between px-4 py-2 hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                People <span className="text-[10px] ml-2">▶</span>
              </div>
              {/* Nested Menu Container */}
              <ul className="invisible opacity-0 group-hover/nested:visible group-hover/nested:opacity-100 absolute left-full top-0 ml-[1px] min-w-[200px] bg-[#0b1220] border border-white/10 rounded-xl py-2 shadow-2xl transition-all duration-200">
                <SubLink href="/people/faculty">Faculty</SubLink>
                <SubLink href="/people/research-scholar">Research Scholar</SubLink>
                <SubLink href="/people/staff">Staff</SubLink>
              </ul>
            </li>

            {/* NESTED HOVER: Tech Partners */}
            <li className="relative group/nested">
              <div className="flex items-center justify-between px-4 py-2 hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                Tech Partners <span className="text-[10px] ml-2">▶</span>
              </div>
              <ul className="invisible opacity-0 group-hover/nested:visible group-hover/nested:opacity-100 absolute left-full top-0 ml-[1px] min-w-[180px] bg-[#0b1220] border border-white/10 rounded-xl py-2 shadow-2xl transition-all duration-200">
                <SubLink href="/tech-partner#isro">ISRO</SubLink>
                <SubLink href="/tech-partner#nasa">NASA</SubLink>
                <SubLink href="/tech-partner#esa">ESA</SubLink>
              </ul>
            </li>

            <hr className="border-white/5 my-1" />
            <SubLink href="/membership">Membership</SubLink>
            <SubLink href="/faq">FAQ</SubLink>
          </NavDropdown>

          <li><NavLink href="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

// --- Helper Components ---

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-2 py-4 hover:text-white transition-colors block">
      {children}
    </Link>
  );
}

function NavDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="relative group py-4">
      <button className="flex items-center gap-1 hover:text-white transition-colors outline-none">
        {title} <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform">▼</span>
      </button>
      
      {/* Dropdown Menu Container */}
      <ul className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-[100%] z-10
      mt-0 min-w-[220px] bg-[#0b1220] border border-white/10 rounded-xl py-2 shadow-2xl transition-all duration-200 translate-y-2 group-hover:translate-y-0">
        {children}
      </ul>
    </li>
  );
}

function SubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="block px-4 py-2 hover:bg-white/5 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}