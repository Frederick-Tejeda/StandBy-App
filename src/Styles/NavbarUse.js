import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	Header: {
		width: '100dvw',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'fixed',
		bottom: 0,
		left: 0,
		Nav: {
			width: '80%',
			height: '90%',
			Ul: {
				width: '100%',
				height: '100%',
				listStyle: 'none',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				Pressable: {
					width: '30%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			},
		},
	},
	Current: {
		width: '32%',
		fontWeight: 'bold',
		backgroundColor: 'green',
		fontSize: '20px',
	},
	Other: {
		width: '32%',
		backgroundColor: 'white',
		fontSize: '18px',
		textAlign: 'center'
	},
})

export default Styles