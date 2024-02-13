"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PostList = ({ posts }) => {
    return ((0, jsx_runtime_1.jsxs)("table", { className: 'box table is-striped is-narrow', children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { className: 'has-background-link-light', children: [(0, jsx_runtime_1.jsx)("th", { children: "#" }), (0, jsx_runtime_1.jsx)("th", { children: "Title" }), (0, jsx_runtime_1.jsx)("th", { children: "User" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: posts.map(post => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: post.id }), (0, jsx_runtime_1.jsx)("td", { children: post.title }), (0, jsx_runtime_1.jsx)("td", { children: post.userId })] }, post.id))) })] }));
};
exports.PostList = PostList;
