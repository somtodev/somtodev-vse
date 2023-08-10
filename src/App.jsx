import {Route, Routes} from "react-router-dom";
import "./assets/css/main.css";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import ComingSoon from "./pages/ComingSoon";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog">
                    <Route index element={<ComingSoon />} />
                    {/*<Route path="/blog/:id" element={<BlogViewer />} /*/}>
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}
