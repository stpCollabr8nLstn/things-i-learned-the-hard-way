import React from "react"

import { PageDataProvider } from "../context/pageDataContext"
import Layout from "../components/layout"

const IndexPage = () => (
  <PageDataProvider>
    <Layout />
  </PageDataProvider>
)

export default IndexPage
