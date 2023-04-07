import React from 'react'
import Layout from '../../container/Layout'
import GraphComponent from '../../views/GraphComponent'
import Greetings from '../../views/Greetings'

const DashoardIndex = () => {
  return (
    <div>
        <Layout>
          <Greetings/>
          <GraphComponent/>
        </Layout>
      </div>
  )
}

export default DashoardIndex