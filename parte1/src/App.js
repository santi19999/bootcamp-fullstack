import './App.css';
const Mensaje = () => {
	return <h1>Hola Mundo desde un componente</h1>;
};
function App() {
	return (
		<div className="App">
			<Mensaje />
		</div>
	);
}

export default App;
