import Styles from '../Styles/NavbarUse'
import { useDataContext } from '../Context/DataContext'

export default function Navbar({ current }){

	const { GoAddPlace, GoSortPlace, GoAccountPlace } = useDataContext()

	return(
		<>
			<header style={Styles?.Header}>
				<nav style={Styles?.Header?.Nav}>
					<ul style={Styles?.Header?.Nav?.Ul}>
						<li onClick={GoAddPlace} style={ current == 'Add' ? Styles?.Current : Styles?.Other }>Add</li>
						<li onClick={GoSortPlace} style={ current == 'Sort' ? Styles?.Current : Styles?.Other }>Sort</li>
						<li onClick={GoAccountPlace} style={ current == 'Account' ? Styles?.Current : Styles?.Other }>Account</li>
					</ul>
				</nav>
			</header>
		</>
	)
}