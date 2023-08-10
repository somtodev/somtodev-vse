import {Helmet} from "react-helmet";

export default function Meta({ title, page }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Your page description." />
            <meta name="robots" content="index, follow" />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            {/* Open Graph tags */}
            <meta property="og:title" content="Somtochukwu" />
            <meta property="og:description" content="SWD | Personal Website" />
            <meta property="og:image" content="/profile.png" />
            <meta property="og:url" content="https://somtodev.netlify.app" />

            {/* Twitter Card tags */}
            <meta name="twitter:title" content="Somtochukwu" />
            <meta name="twitter:description" content="Software Developer" />
            <meta name="twitter:image" content="/profile.png" />
        </Helmet>
    );
}

function BlogMeta() {
    return (
        <>
            {/* Open Graph tags */}
            <meta property="og:title" content="Somtochukwu | Blog" />
            <meta property="og:description" content="Somto Dev's Blog" />
            <meta property="og:image" content="/profile.png" />
            <meta
                property="og:url"
                content="https://somtodev.netlify.app/blog"
            />
            {/* Twitter Card tags */}
            <meta name="twitter:title" content="Somtochukwu | Blog" />
            <meta name="twitter:description" content="Somto Dev's Blog" />
            <meta
                name="twitter:image"
                content="https://somtodev.netlify.app/blog"
            />
        </>
    );
}
