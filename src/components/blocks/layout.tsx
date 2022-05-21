

import * as React from "react"


import { Footer } from "./footer"
import { Header } from "./navbar"
type layoutProps = {
  children?: React.ReactNode | ChildNode;
}

export const Layout = ({ children }: layoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
