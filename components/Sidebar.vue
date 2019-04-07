<template>
	<v-navigation-drawer v-model="drawerState" temporary app>
		<v-list>
			<v-list-tile
				v-for="(item, i) in items"
				:key="i"
				:to="item.to"
				router
				exact
			>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title v-text="item.title" />
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Sidebar',
	data: () => ({
		items: [
			{
				icon: 'apps',
				title: 'Welcome',
				to: '/'
			},
			{
				icon: 'bubble_chart',
				title: 'Inspire',
				to: '/inspire'
			}
		]
	}),
	computed: {
		drawerState: {
			get: function() {
				return this.drawer;
			}
		},
		...mapState({
			drawer: state => state.sidebar.drawer
		})
	}
};
</script>

<style scoped></style>
