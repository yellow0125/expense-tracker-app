import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllScreen from './screens/AllScreen'
import ImportantScreen from './screens/ImportantScreen'
import AddScreen from './screens/AddScreen'
import Color from './constants/Color'
import { MaterialIcons, FontAwesome  } from "@expo/vector-icons";
import IconButton from './components/IconButton'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: Color.TitleBgc,
					
				},
				headerTintColor: Color.White,
				headerTitleAlign: 'center',
				tabBarStyle: {
					backgroundColor: Color.TitleBgc,
				},
				tabBarActiveTintColor: Color.Yellow,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={24}
						color={tintColor}
						onPress={() => {
							console.log("Add expense");
							navigation.navigate('AddScreen');
						}}
					/>
				),
			})}
		>
			<BottomTabs.Screen
				name="ALLExpenses"
				component={AllScreen}
				options={{
					title: "All Expenses",
					tabBarLabel: "All Expenses",
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons  name="attach-money" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="ImportantExpenses"
				component={ImportantScreen}
				options={{
					title: "Important Expenses",
					tabBarLabel: "Important",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="exclamation" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	)
}
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpensesOverview"
						component={ExpensesOverview}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='AddScreen'
						component={AddScreen}
						options={{
							title:'AddExpense',
							presentation: "modal",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" backgroundColor={Color.TitleBgc} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
