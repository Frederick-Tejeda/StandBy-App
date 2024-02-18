import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
	MainLog: {
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    transform: 'translate(-50%, -50%)',
	    width: '90vw',
	    height: '60vw',
	    backgroundColor: 'blue',
	    borderRadius: 10,
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    padding: '4vmin',
	    color: '#fff',
	},
	Main: {
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    transform: 'translate(-50%, -50%)',
	    width: '90vw',
	    height: '90vw',
	    backgroundColor: 'blue',
	    borderRadius: 10,
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'space-between',
	    padding: '4vmin',
	    color: '#fff',
	    Header: {
	    	display: 'flex',
		    alignItems: 'center',
		    justifyContent: 'center',
		    height: '15%',
		    fontSize: '3vmin',
		    textAlign: 'center',
		    Text: {
		    	 color: 'white',
		    	 fontWeight: 'bold',
		    	 fontSize: '6vw'
		    },
	    },
	    InContainer: {
	    	display: 'flex',
		    flexDirection: 'column',
		    justifyContent: 'flex-end',
		    gap: '3vw',
		    height: '65%',
		    width: '90%',
		    TextInput: {
		    	width: '100%',
			    height: '7vmin',
			    padding: '5px',
			    fontSize: '4vw',
			    border: '1px solid gray',
			    color: 'gray',
			    backgroundColor:  'white',
			    borderRadius: '1vmin'
		    }
	    },
	    SendContainer: {
	    	width: '100%',
		    height: '20%',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		    Pressable: {
		    	width: '90%',
			    paddingTop: 2,
			    paddingBottom: 2,
			    backgroundColor: '#f00',
			    color: '#fff',
			    cursor: 'pointer',
			    borderRadius: '1vmin',
			    Text: {
			    	textAlign: 'center',
			    	color: 'white',
			    	fontSize: '5vw',
			    }
		    }
	    }
	}
})

//main div{width: 100%;}

//input, button{border-radius: 0.5vmin}


export default Style