import React, {useState} from 'react';
import styles from './Person.css';


const HookPerson = (props) => {

	const [totalState, setTotal] = useState({
		total: 0,
		value: '',
		list: []
	});

	//adds an intem to totalState.list
	const addItem = () => {
		totalState.list.push(parseFloat(totalState.value));
		setTotal({
			total: totalState.total,
			value: totalState.value,
			list: totalState.list
		});
    }

	// sets the value to the amount put in the input field
	const changeHandler = (event) => {
		setTotal({
			total: totalState.total,
			value: event.target.value,
			list: totalState.list
		})
	}

	// Will take enter key press adds the value to the list and the reset the value
	const keyHandler = (event) => {
		if(event.key === 'Enter') {
			setTotal({
				total: totalState.total,
				value: event.target.value,
				list: totalState.list
			});
			addItem();
			setTotal({
				total: totalState.total,
				value: '',
				list: totalState.list
			});
		}

	}

	//calculate the total amount for the values in the list
    const calculate = () => {
		for(let i = 0; i < totalState.list.length; i++){
			totalState.total = Math.round((totalState.total + totalState.list[i]) * 100) / 100;
			setTotal({
				total: totalState.total,
				value: totalState.value,
				list: totalState.list
			})
		}
	}

	// reset total
	const clear = () => {
		setTotal({
			total: 0,
			value: '',
			list: totalState.list
		})
	}

	// will empty the list if you want to restart fully
	const emptyList = () => {
		setTotal({
			total: 0,
			value: '',
			list: []
		})
	}


	// will delete the last item put onto the list
	const deleteItem = () => {
		totalState.list.pop()
		setTotal({
			total: totalState.total,
			value: totalState.value,
			list: totalState.list = totalState.list
		})
	}



	return(
		<div className="main">
			<p className="listOf">{props.name}'s costs: {totalState.list.map((item, index) => (
				<span>{item}, </span>
			))}
			</p>
			<p className="mainInput">
				<input type="text" className="input" value={totalState.value} onChange={changeHandler} onKeyDown={keyHandler}/>
				<button type="submit" className="add" onClick={addItem}>Add</button>
			</p>
			<p className="calculate"><button className="calc" onClick={deleteItem}>Delete</button></p>
			<p className="calculate"><button className="calc" onClick={clear}>Clear Total</button></p>
			<p className="calculate"><button className="calc" onClick={emptyList}>Clear List</button></p>
			<p className="calculate"><button className="calc" onClick={calculate}>Calculate Total</button></p>

			<h2 className="total">Total for {props.name} = <span className="number">{totalState.total} </span></h2>
		</div>
	);
}

// <button className="calc" onClick={deleteItem}>Delete</button>
// <button className="calc" onClick={clear}>Clear Total</button>
// <button className="calc" onClick={emptyList}>Clear List</button>
// <p className="calculate"><button className="calc" onClick={calculate}>Calculate Total</button></p>


export default HookPerson;
