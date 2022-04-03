import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { Header } from '@/components/layout/Header'


export default function Welcome() {
	let history = useHistory();
	const [modalShow, setModalShow] = useState(false);

	return (<>
		<Header></Header>
		<div className="mb-5">
			<div className="row" style={{flexDirection: 'column',alignItems: 'center'}}>
				<img src="https://i.postimg.cc/Lsxrbz02/Logo-2.png" style={{ width: "35vw" }}/>
				<div className="text-center">
					<h1 style={{ fontSize: "6vw" }}>A gift with a story</h1>
				</div>
				<div className="text-center">
					<h4 style={{ fontSize: "3.5vw" }}>
						DemeterGift creates the most easy, transparent and fun NFT charity auction
						on Web3, by helping charities raise additional support!
					</h4>
				</div>
				<div style={{ width: '180px' }} className="col">
					<NavLink to="/donation">
						<div style={{
						background: 'rgb(236, 201, 0)',
						textAlign: 'center',
						cursor: 'pointer',
						height: '58px',
						display: 'flex',
						fontSize: '20px',
						color: 'white',
						alignItems: 'center',
						borderRadius: '5px',
						justifyContent: 'center',
						margin: '0px'
						}} className="card card-body">
							<div >Let’s donate!</div>
						</div>
					</NavLink>
				</div>
			</div>

			<div className="Event row">
				<img style={{padding: '0px',width: '-webkit-fill-available',height: '96%' }} src="https://www.metisgift.com/Event/Panel.svg" />
				<img style={{ "position": "absolute", "bottom": "0" }} src="https://www.metisgift.com/Event/Group.svg" />
				<img style={{padding: '0px',position: 'absolute',width: '61%',marginTop: '10%'}} src="https://www.metisgift.com/Event/CharityText.svg" />
				<div className="card-body EventBTN">
					<NavLink to="/CreateEvents">
						<span>
							Start event
						</span>
					</NavLink>
				</div>
			</div>
		</div>
	</>

	);
}