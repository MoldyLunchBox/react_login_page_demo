import Header from './components/Header'
import { AuthProvider } from './context';
function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>

  )
}

export default App;
