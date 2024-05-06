import { View } from "react-native";

import { styles } from "./styles";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming
} from "react-native-reanimated";
import { useEffect } from "react";

interface Props {
	total: number;
	current: number;
}

export function ProgressBar({ total, current }: Props) {
	const percentage = Math.round((current / total) * 100);
	const progress = useSharedValue(percentage);

	useEffect(() => {
		progress.value = withTiming(percentage, {
			duration: 500
		});
	}, [percentage]);

	const progressAnimationStyle = useAnimatedStyle(() => {
		return {
			width: `${progress.value}%`
		};
	});

	return (
		<View style={styles.track}>
			<Animated.View style={[styles.progress, progressAnimationStyle]} />
		</View>
	);
}
