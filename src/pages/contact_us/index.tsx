import React from "react";
import SideBarContactUsForm from "@/src/components/SideBarContactUsForm/SideBarContactUsForm";
import Layout from '@/src/components/Layout';

export default function Contact_Us() {
	return (
		<Layout title={'Contact Us'}>
			<SideBarContactUsForm />
		</Layout>
	);
}