import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="127" cy="123" r="123" />
        <rect x="-9" y="263" rx="0" ry="0" width="280" height="26" />
        <rect x="-4" y="301" rx="13" ry="13" width="274" height="77" />
        <rect x="13" y="399" rx="7" ry="7" width="60" height="31" />
        <rect x="101" y="405" rx="8" ry="8" width="173" height="44" />
    </ContentLoader>
)

export default Preloader