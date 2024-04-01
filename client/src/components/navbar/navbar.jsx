import './navbar.styles.css'
//import {handleChange, handleSubmit} from '../../views/home/home.component';


function Navbar() {
	return (
		<div className="search-box">
			<form onChange={(e) => handleChange(e)}>
				<input placeholder="Busqueda" type='search'/>
				<button type='submit'>Buscar</button>
			</form>
		</div>
	);
}

export default Navbar;