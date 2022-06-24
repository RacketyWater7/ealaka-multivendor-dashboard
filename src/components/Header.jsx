import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-10">
    <p className="text-2xl font-extrabold tracking-tight text-indigo-900">
      {title}
    </p>
    <p className="text-lg text-indigo-400">{category}</p>
  </div>
);

export default Header;
