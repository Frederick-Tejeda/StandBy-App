import Login from './Views/Login'
import Using from './Views/Using'

import { useDataContext } from './Context/DataContext'

export default function App() {

  let { isLoggedIn } = useDataContext()

  return isLoggedIn ? ( <Using /> ) : ( <Login /> )
}
