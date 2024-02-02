import React from 'react';
import { Link } from 'react-router-dom'

export default function PlanetsB() {

  return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '24px', padding: '24px' }}>
    <h1>Welcome to Planets B!</h1>
    <Link style={{ textDecoration: 'underline' }} to="/planets/a">Go to <code>/planets/a</code></Link>
  </div>
}
