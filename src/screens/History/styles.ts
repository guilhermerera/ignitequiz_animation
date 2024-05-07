import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: THEME.COLORS.GREY_800
	},
	history: {
		padding: 32
	},
	containerDeleteButton: {
		width: "100%",
		height: 90,
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    marginBottom:12
	},
	deleteButton: {
		backgroundColor: THEME.COLORS.DANGER_LIGHT,
		width: 90,
		height: 90,
		borderTopStartRadius: 6,
		borderBottomStartRadius: 6,
		justifyContent: "center",
		alignItems: "center"
	}
});
