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
					width: '40%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			},
		},
	},
	Current: {
		fontWeight: 'bold',
		fontSize: '20px',
		textAlign: 'center',
		
	},
	Other: {
		fontSize: '18px',
		textAlign: 'center',
	},
})

export default Styles