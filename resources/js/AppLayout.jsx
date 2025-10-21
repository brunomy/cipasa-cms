import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';

export default function AppLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
