import { useDataContext } from '../Context/DataContext'
import { View, Text, Pressable } from 'react-native'
import Styles from '../Styles/NavbarLog'

export default function Navbar({ current }){

	const { GoLogPlace, GoSignPlace } = useDataContext()

	return(
		<>
			<View style={Styles?.Header}>
				<View style={Styles?.Header?.Nav}>
					<View style={Styles?.Header?.Nav?.Ul}>
						<Pressable style={Styles?.Header?.Nav?.Ul?.Pressable} onPress={GoSignPlace}>
							<Text style={ current == 'Sign' ? Styles?.Current : Styles?.Other }>Sign</Text>
						</Pressable>
						<Pressable style={Styles?.Header?.Nav?.Ul?.Pressable} onPress={GoLogPlace}>
							<Text style={ current == 'Log' ? Styles?.Current : Styles?.Other }>Log</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</>
	)
}