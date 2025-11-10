import React from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';

export default function AppLayout({ contato, children }) {
  return (
    <Layout contato={contato}>
      {children}
    </Layout>
  );
}
