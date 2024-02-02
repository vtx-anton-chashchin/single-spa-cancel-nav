import React from 'react';
import { links } from './root.helper.js';
import { Link } from 'react-router-dom';

export default function Root(props) {
  return (
    <>
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        <div className="flex items-center justify-between">
          {links.map((link) => {
            return (
              <Link key={link.href} className="p-6" style={{ border: '2px solid white' }} to={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
