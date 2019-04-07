<template>
	<v-toolbar fixed app>
		<v-toolbar-side-icon @click="toggleDrawer" />
		<v-toolbar-title v-text="title" />
		<v-spacer />
	</v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'Header',
	data: () => ({
		title: 'Wuxia PWA'
	}),
	methods: {
		...mapActions({
			toggleDrawer: 'sidebar/toggleDrawer'
		})
	}
};
</script>

<style scoped></style>
