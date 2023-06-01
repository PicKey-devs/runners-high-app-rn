import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default function BottomTabs({
	state,
	descriptors,
	navigation,
	route,
}: any) {
	const currentScreen = getFocusedRouteNameFromRoute(route);
	console.log(currentScreen);
	React.useLayoutEffect(() => {
		console.log('BottomTabs', route);
	}, [route]);
	switch (currentScreen) {
		default:
			return (
				<View
					style={{
						...styles.BottomTabsWrapper,
					}}
				>
					<View
						style={{
							...styles.Button,
							...(currentScreen === 'Home' && styles.BottomTabActive),
						}}
					>
						<Text style={styles.BottomTabName}>List</Text>
					</View>
					<View style={styles.Button}>
						<Text style={styles.BottomTabName}>My</Text>
					</View>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	BottomTabsWrapper: {
		height: 60,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderTopColor: '#538EF4',
		borderTopWidth: 2,
		borderBottomColor: '#538EF4',
		borderBottomWidth: 2,
	},

	BottomTabName: {
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 22,
	},
	BottomTabActive: {
		backgroundColor: '#538EF4',
	},
	Button: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
