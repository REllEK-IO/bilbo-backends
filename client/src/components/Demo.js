import React from 'react';
import Alert from './bootstrap/Alert';
import Badges from './bootstrap/Badges';
import BreadCrumbs from './bootstrap/BreadCrumbs';
import ButtonGroup from './bootstrap/ButtonGroup';
import Card from './bootstrap/Card';
import Collapse from './bootstrap/Collapse';
import Dropdown from './bootstrap/ButtonDropdown';
import Form from './bootstrap/Form';
import InputGroup from './bootstrap/InputGroup';
import Jumbotron from './bootstrap/Jumbotron';
import Layout from './bootstrap/Layout';
import ListGroup from './bootstrap/ListGroup';
import Modal from './bootstrap/Modal';
import Pagination from './bootstrap/Pagination';
import PopOver from './bootstrap/PopOver';
import ProgressBar from "./bootstrap/ProgressBar";
import Tables from "./bootstrap/Tables";
import Tabs from './bootstrap/Tabs';
import Tooltip from './bootstrap/Tooltip';

class Demo extends React.Component {
	render(){
		return (
			<div>
				<br />
				<Alert />
				<Badges />
				<BreadCrumbs />
				<ButtonGroup />
				<Card />
				<Collapse />
				<Dropdown />
				<Form />
				<InputGroup />
				<Jumbotron />
				<Layout />
				<ListGroup />
				<Modal />
				<Pagination />
				<PopOver />
				<ProgressBar />
				<Tables />
				<Tabs />
				<Tooltip />
			</div>
		);
	}
};

export default Demo;