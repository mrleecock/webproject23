import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/dark.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage, { action } from './pages/login/LoginPage';
import RootLayout from './pages/root/RootLayout';
import { user_loader } from './pages/root/user_loader';
import { register_login_loader } from './helppers/register_login_loader';
import { register_action } from './pages/register/register_action';
import { login_action } from './pages/login/login_action';
import UserPage from './pages/user/UserPage';
import { user_page_loader } from './pages/user/user_page_loader';
import RootPage from './pages/root/RootPage';
import { logout_action } from './pages/root/logout_action';
import AddPostPage from './pages/add_post/AddPostPage';
import PostsPage from './pages/posts/PostsPage';
import { posts_loader } from './pages/posts/posts_loader';
import { add_post_action } from './pages/add_post/add_post_action';
import PostPage from './pages/post/PostPage';
import { user_picture_action } from './pages/user/user_picture_action';
import { post_loader } from './pages/post/post_loader';
import { add_comment_action } from './pages/add_comment/add_comment_action';
import AddCommentPage from './pages/add_comment/AddCommentPage';
import EditPostPage from './pages/edit_post/EditPostPage';
import { edit_post_loader } from './pages/edit_post/edit_post_loader';
import { edit_post_action } from './pages/edit_post/edit_post_action';
import EditCommentPage from './pages/edit_comment/EditCommentPage';
import { edit_comment_loader } from './pages/edit_comment/edit_comment_loader';
import { edit_comment_action } from './pages/edit_comment/edit_comment_action';
import { post_action } from './pages/post/post_action';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>Error</p>,
    loader: user_loader,
    action: logout_action,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        path: "",
        element: <RootPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
        loader: posts_loader
      },
      {
        path: "post/add",
        element: <AddPostPage />,
        action: add_post_action
      },
      {
        path: "post/:postid/addcomment",
        element: <AddCommentPage />,
        action: add_comment_action
      },
      {
        path: "register",
        element: <RegisterPage />,
        loader: register_login_loader,
        action: register_action
      },
      {
        path: "login",
        element: <LoginPage />,
        loader: register_login_loader,
        action: login_action
      },
      {
        path: "user/:username",
        element: <UserPage />,
        loader: user_page_loader,
        action: user_picture_action
      },
      {
        path: "post/:postid",
        element: <PostPage />,
        loader: post_loader,
        action: post_action
      },
      {
        path: "post/:postid/edit",
        element: <EditPostPage />,
        loader: edit_post_loader,
        action: edit_post_action
      },
      {
        path: "comment/:commentid/edit",
        element: <EditCommentPage />,
        loader: edit_comment_loader,
        action: edit_comment_action
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);