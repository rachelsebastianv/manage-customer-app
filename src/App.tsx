import React from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Layout from '../src/hoc/Layout/Layout'

function App() {
  return (
    <Layout />
  );
}

export default withRouter(App);