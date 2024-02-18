import { useDataContext } from '../Context/DataContext'

import Navbar from '../Components/NavbarUse'

import Account from '../Components/Account'
import Add from '../Components/Add'
import Sort from '../Components/Sort'

export default function Using(){

	let { usingPlace } = useDataContext()

	return(
		<>
			{ usingPlace === 'Add' ? <Add /> : usingPlace === 'Sort' ? <Sort /> : <Account /> }
			<Navbar current={ usingPlace } />
		</>
	)
}