import { Helmet } from "react-helmet";

export default function Meta({ title }) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Your page description." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.example.com/page-url" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            {/* Open Graph tags */}
            <meta property="og:title" content="Your Open Graph Title" />
            <meta
                property="og:description"
                content="Your Open Graph Description."
            />
            <meta
                property="og:image"
                content="https://www.example.com/og-image.jpg"
            />
            <meta
                property="og:url"
                content="https://www.example.com/page-url"
            />
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Twitter Card Title" />
            <meta
                name="twitter:description"
                content="Your Twitter Card Description."
            />
            <meta
                name="twitter:image"
                content="https://www.example.com/twitter-image.jpg"
            />
        </Helmet>
    );
}
