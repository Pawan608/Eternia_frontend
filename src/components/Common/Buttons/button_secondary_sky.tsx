import React from "react";

function Button_secondary_sky({ text }: { text: string }) {
  const buttonClass = `p-3 px-16 text-sm font-semibold flex items-center justify-center bg-sky-600 rounded hover:bg-sky-700 transition ease-in-out delay-150 text-white my-4 cursor-pointer`;
  return <button className={buttonClass}>{text}</button>;
}

export default Button_secondary_sky;
