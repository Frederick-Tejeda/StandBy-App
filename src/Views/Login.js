import { useDataContext } from '../Context/DataContext'

import Navbar from '../Components/NavbarLog'

import Sign from '../Components/Sign'
import Log from '../Components/Log'

export default function Login(){

	let { loginPlace } = useDataContext()

	return(
		<>
			{ loginPlace === 'Sign' ? <Sign /> : <Log /> }
			<Navbar current={ loginPlace } />
		</>
	)
}