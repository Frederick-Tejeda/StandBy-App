import 'core-js/stable'
import 'regenerator-runtime/runtime'

import InsideApp from './src/InsideApp'
import { DataContextProvider } from './src/Context/DataContext'

const App = () => {
 
    return (
        <DataContextProvider>
            <InsideApp />
        </DataContextProvider>
    );
};

export default App