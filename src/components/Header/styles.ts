import { StyleSheet, Platform } from "react-native";

const isAndroid = Platform.OS === 'android';
const textFontSize = isAndroid ? 30 : 25;
const borderBottomRadius = isAndroid ? 40 : 30;

export const styles = StyleSheet.create({
	contain: {
		marginTop: isAndroid ? -10 : 25,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: isAndroid ? 0 : 15,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4169E1",
		borderBottomLeftRadius: borderBottomRadius,
		borderBottomRightRadius: borderBottomRadius,
	},
	text: {
		color: "white",
		fontSize: textFontSize,
		paddingBottom: isAndroid ? 10 : 5,
	},
});
