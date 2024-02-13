"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const users_json_1 = __importDefault(require("../../api/users.json"));
const user_1 = require("../../services/user");
const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = (0, react_1.useState)('');
    const [hasTitleError, setHasTitleError] = (0, react_1.useState)(false);
    const [userId, setUserId] = (0, react_1.useState)(0);
    const [hasUserIdError, setHasUserIdError] = (0, react_1.useState)(false);
    const [body, setBody] = (0, react_1.useState)('');
    const [bodyErrorMessage, setBodyErrorMessage] = (0, react_1.useState)('');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setHasTitleError(false);
    };
    const handleUserIdChange = (event) => {
        setUserId(+event.target.value);
        setHasUserIdError(false);
    };
    const handleBodyChange = (event) => {
        setBody(event.target.value);
        setBodyErrorMessage('');
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setHasTitleError(!title);
        setHasUserIdError(!userId);
        if (!body) {
            setBodyErrorMessage('Please enter some text');
        }
        else if (body.length < 5) {
            setBodyErrorMessage('Body should have at least 5 chars');
        }
        if (!title || !userId || body.length < 5) {
            return;
        }
        onSubmit({
            id: 0,
            title,
            userId,
            body,
            user: (0, user_1.getUserById)(userId),
        });
        reset();
    };
    const reset = () => {
        setTitle('');
        setBody('');
        setUserId(0);
        setHasTitleError(false);
        setHasUserIdError(false);
        setBodyErrorMessage('');
    };
    return ((0, jsx_runtime_1.jsxs)("form", { action: "./api/posts", method: "POST", className: "box", onSubmit: handleSubmit, onReset: reset, children: [(0, jsx_runtime_1.jsxs)("div", { className: "field", children: [(0, jsx_runtime_1.jsx)("label", { className: "label", htmlFor: "post-title", children: "Title" }), (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.default)('control', {
                            'has-icons-right': hasTitleError,
                        }), children: [(0, jsx_runtime_1.jsx)("input", { id: "post-title", className: (0, classnames_1.default)('input', {
                                    'is-danger': hasTitleError,
                                }), type: "text", value: title, onChange: handleTitleChange, onBlur: () => {
                                    setHasTitleError(!title);
                                } }), hasTitleError && ((0, jsx_runtime_1.jsx)("span", { className: "icon is-small is-right", children: (0, jsx_runtime_1.jsx)("i", { className: "fas fa-exclamation-triangle has-text-danger" }) })), hasTitleError && ((0, jsx_runtime_1.jsx)("p", { className: "help is-danger", children: "Title is required" }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "field", children: [(0, jsx_runtime_1.jsx)("label", { className: "label", htmlFor: "post-user-id", children: "Subject" }), (0, jsx_runtime_1.jsxs)("div", { className: "control has-icons-left", children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('select', {
                                    'is-danger': hasUserIdError,
                                }), children: (0, jsx_runtime_1.jsxs)("select", { id: "post-user-id", value: userId, onChange: handleUserIdChange, children: [(0, jsx_runtime_1.jsx)("option", { value: "0", children: "Select a user" }), users_json_1.default.map(user => ((0, jsx_runtime_1.jsx)("option", { value: user.id, children: user.name }, user.id)))] }) }), (0, jsx_runtime_1.jsx)("span", { className: "icon is-small is-left", children: (0, jsx_runtime_1.jsx)("i", { className: "fas fa-user" }) })] }), hasUserIdError && ((0, jsx_runtime_1.jsx)("p", { className: "help is-danger", children: "Please select a user" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "field", children: [(0, jsx_runtime_1.jsx)("label", { className: "label", children: "Message" }), (0, jsx_runtime_1.jsx)("div", { className: "control", children: (0, jsx_runtime_1.jsx)("textarea", { className: (0, classnames_1.default)('textarea', {
                                'is-danger': bodyErrorMessage,
                            }), placeholder: "Add some text here", value: body, onChange: handleBodyChange }) }), bodyErrorMessage && ((0, jsx_runtime_1.jsx)("p", { className: "help is-danger", children: bodyErrorMessage }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "buttons", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "button is-link", children: "Submit" }), (0, jsx_runtime_1.jsx)("button", { type: "reset", className: "button is-link is-light", children: "Cancel" })] })] }));
};
exports.PostForm = PostForm;
