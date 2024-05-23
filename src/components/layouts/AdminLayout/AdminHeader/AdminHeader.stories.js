import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../redux/mockStore';
import { AdminHeader } from './AdminHeader';

export default {
  title: 'Components/AdminHeader',
  component: AdminHeader,
};

export const Default = () => (

    <AdminHeader />
 
);

