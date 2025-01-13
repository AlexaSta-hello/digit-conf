import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; /*remove a space. Mit as sagen wir TS er soll es als SElectedPage behandeln*/

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage 
                ? "text-green-1" 
                : "text-white"}
            transition duration-300 hover:text-blue-1 font-['Audiowide']
            `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link