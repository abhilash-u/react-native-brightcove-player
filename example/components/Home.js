import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class Home extends Component {
	static navigationOptions = {
		headerTitle: 'React Native Example'
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<View style={styles.control}>
					<Button
						title="Header Example"
						onPress={() => navigate('BrightcoveHeader')}
					/>
				</View>
				<View style={styles.control}>
					<Button
						title="Scroll Example"
						onPress={() => navigate('BrightcoveScroll')}
					/>
				</View>
				<View style={styles.control}>
					<Button
						title="HTML Example"
						onPress={() => navigate('ArticleStack')}
					/>
				</View>
				<View style={styles.control}>
					<Button
						title="Nested View Example"
						onPress={() => navigate('NestedView')}
					/>
				</View>
				<View style={styles.control}>
					<Button
						title="Live - No DVR"
						onPress={() => navigate('BrightcoveLiveNoDVR')}
					/>
				</View>
				<View style={styles.control}>
					<Button
						title="Live - DVR"
						onPress={() => navigate('BrightcoveLiveDVR')}
					/>
				</View>
			</View>
		);
	}
}

/**
 * Component styles
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	control: {
		width: '50%',
		marginTop: 15
	}
});
