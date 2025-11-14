import React from 'react';
import { usePage } from '@inertiajs/react';
import './App.scss';
import Layout from './components/Layout/Layout';

export default function AppLayout({ children }) {
  const { contato } = usePage().props;

  return (
    <Layout contato={contato}>
      {children}
    </Layout>
  );
}
