import { AmplifySignOut } from '@aws-amplify/ui-react';
import React from 'react'

const Index = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <div className="container mx-auto">

      <AmplifySignOut/>
      </div>
    </div>
  )
}

export default Index;
