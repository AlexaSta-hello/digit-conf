import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.2)] font-semibold px-4 py-3 transition duration-300 text-blue-3 text-m bg-green-2 hover:bg-blue-3 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.Register)}
        href={`#${SelectedPage.Register}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton