"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const posts_json_1 = __importDefault(require("./api/posts.json"));
const PostForm_1 = require("./components/PostForm/PostForm");
const PostList_1 = require("./components/PostList/PostList");
const user_1 = require("./services/user");
const initialPosts = posts_json_1.default.map(post => (Object.assign(Object.assign({}, post), { user: (0, user_1.getUserById)(post.userId) })));
function getNewPostId(posts) {
    const maxId = Math.max(...posts.map(post => post.id));
    return maxId + 1;
    //return +Math.random().toFixed(12).slice(2);
}
const App = () => {
    const [posts, setPosts] = (0, react_1.useState)(initialPosts);
    const addPost = (_a) => {
        var { id } = _a, data = __rest(_a, ["id"]);
        const newPost = Object.assign({ id: getNewPostId(posts) }, data);
        setPosts(currentPosts => [newPost, ...currentPosts]);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'section', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'title', children: "Create a post" }), (0, jsx_runtime_1.jsx)(PostForm_1.PostForm, { onSubmit: addPost }), (0, jsx_runtime_1.jsx)(PostList_1.PostList, { posts: posts })] }));
};
exports.App = App;
