import React from 'react';
import LoginForm from '../../components/Login/login';
import Layout from '../../components/Layout';

export default function Login() {
  return (
	<Layout title="Log In">
		<LoginForm />
	</Layout>
  );
}