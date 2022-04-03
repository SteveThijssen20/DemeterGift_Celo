import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function Home() {
    let history = useHistory();

    async function Connect() {
        try {
            var statusp = (document.getElementById("CNTbutton"))
            statusp.innerHTML = "Connecting..."
            let result = await window.ethereum.request({ method: 'eth_requestAccounts' });
            result;
            try {
                const getacc = await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xaef3', }], //44787
                });
                getacc;
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainId: '0xaef3', //44787
                                    chainName: 'Alfajores Celo Testnet',
                                    nativeCurrency: {
                                        name: 'CEUR',
                                        symbol: 'CEUR',
                                        decimals: 18,
                                    },
                                    rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
                                },
                            ],
                        });
                    } catch (addError) {
                        // handle "add" error
                        console.log(addError);
                    }
                }
                // handle other "switch" errors
            }
            statusp.innerHTML = "Connected Successfully!"  
            window.localStorage.setItem("ConnectedMetaCelo", "true")
        } catch (error) {
            return;
        }
      
        history.push("/welcome")
    }

    return (<>
        <div className="wrapper" style={{ justifyContent: "center", background: "#0e1f2a" }}>
            <div className="row" style={{ background: "#0e1f2a", width: "100%", display: "flex" }}>
                <img src="https://i.postimg.cc/Lsxrbz02/Logo-2.png" style={{ width: "74vw" }} />
            </div>
            <div className="row" style={{ background: "#0e1f2a", width: "100%", display: "flex", margin: 0 }}>
                <div className="col" style={{ width: "88vw" }}>
                    <div onClick={Connect} style={{ height: "15vw" }}>
                        <div onClick={Connect} className="card card-body yellowbutton" style={{}}>
                            <div id='CNTbutton' onClick={Connect} className="card-body" style={{ fontSize: 23 }}>
                                CONNECT TO CELO WALLET
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    );
}