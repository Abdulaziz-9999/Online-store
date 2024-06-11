import { lazy } from "react";

export const Layout = lazy(() => import("../layout/layout"))
export const Home = lazy(() => import("../pages/home/home"))
export const About = lazy(() => import("../pages/about/about"))
export const Login = lazy(() => import("../pages/login/login"))
export const Registration = lazy(() => import("../pages/registration/registration"))
export const Contact = lazy(() => import("../pages/contact/contact"))
export const ProductById = lazy(() => import("../pages/productById/productById"))
export const WishList = lazy(() => import("../pages/wishList/wishList"))
export const Products = lazy(() => import("../pages/products/products"))
export const NotFound = lazy(() => import('../pages/notFound/notFound'))
export const Carzina = lazy(() => import('../pages/carzina/carzina'))