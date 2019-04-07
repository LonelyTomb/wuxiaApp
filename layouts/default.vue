<template>
	<v-app dark>
		<Header></Header>
		<Sidebar></Sidebar>
		<v-content>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-content>
		<Footer></Footer>
	</v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
export default {
	components: {
		Header,
		Footer,
		Sidebar
	},
	data: () => ({})
};
</script>
