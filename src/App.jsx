import {Route, Routes} from "react-router-dom";
import "./assets/css/main.css";
import Layout from "./layouts/Layout";

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogViewer from './pages/BlogViewer'
import NotFound from './pages/NotFound'

export default function App() {
return <Layout>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogViewer />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>;
}
