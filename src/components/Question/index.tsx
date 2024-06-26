import { View, Text, Dimensions } from "react-native";
import Animated, { Keyframe } from "react-native-reanimated";

import { Option } from "../Option";
import { styles } from "./styles";

type QuestionProps = {
	title: string;
	alternatives: string[];
};

type Props = {
	question: QuestionProps;
	alternativeSelected?: number | null;
	setAlternativeSelected?: (value: number) => void;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Question({
	question,
	alternativeSelected,
	setAlternativeSelected
}: Props) {
	const enteringKeyFrames = new Keyframe({
		0: {
			opacity: 0,
			transform: [
				{
					translateX: SCREEN_WIDTH
				},
				{ rotate: "120deg" }
			]
		},
		70: { opacity: 0.3 },
		100: {
			opacity: 1,
			transform: [
				{
					translateX: 0
				},
				{ rotate: "0deg" }
			]
		}
	});
	const exitingKeyframe = new Keyframe({
		0: {
			opacity: 1,
			transform: [
				{
					translateX: 0
				},
				{ rotate: "0deg" }
			]
		},
		70: { opacity: 0.3 },
		100: {
			opacity: 1,
			transform: [
				{
					translateX: -SCREEN_WIDTH
				},
				{ rotate: "-120deg" }
			]
		}
	});
	return (
		<Animated.View
			entering={enteringKeyFrames}
			exiting={exitingKeyframe}
			style={styles.container}>
			<Text style={styles.title}>{question.title}</Text>

			{question.alternatives.map((alternative, index) => (
				<Option
					key={index}
					title={alternative}
					checked={alternativeSelected === index}
					onPress={() =>
						setAlternativeSelected && setAlternativeSelected(index)
					}
				/>
			))}
		</Animated.View>
	);
}
