import React, { useState, useEffect } from 'react';
// import {ContentLoader} from '@/components/common/ContentLoader'
import { useIntl } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { Button, Grid, makeStyles } from "@material-ui/core";
import './index.scss'
import Router from 'next/router'


export function Nav(): JSX.Element {
    const [acc, setAcc] = useState('');
    const [Balance, setBalance] = useState('');

    const [isSigned, setSigned] = useState(false);




    async function fetchInfo() {
        if (window.ethereum == null) {
            window.document.getElementById("withoutSign").style.display = "none";
            window.document.getElementById("withSign").style.display = "none";
            window.document.getElementById("installMeta").style.display = "";
            return;
        }
        if (window.ethereum.selectedAddress != null && window.localStorage.getItem("ConnectedMetaCelo") == "true") {
            const Web3 = require("web3")
            const ContractKit = require('@celo/contractkit')
            const web3 = new Web3(window.ethereum)
            const kit = ContractKit.newKitFromWeb3(web3)
            let cEURtoken = await kit.contracts.getStableToken('cEUR')

            let cEURBalance = await cEURtoken.balanceOf(window.ethereum.selectedAddress)


            await setAcc(window.ethereum.selectedAddress.toString().substring(0, 10) + "...");

            setBalance(cEURBalance / 1000000000000000000 + " cEUR");
            setSigned(true);
            try {

                window.document.getElementById("withoutSign").style.display = "none";
                window.document.getElementById("withSign").style.display = "";
            } catch (error) {

            }
        } else {
            setSigned(false);
            window.document.getElementById("withoutSign").style.display = "";
            window.document.getElementById("withSign").style.display = "none";
            try {

                window.document.getElementById("withoutSign").style.display = "none";
                window.document.getElementById("withSign").style.display = "";
            } catch (error) {

            }
        }
    }
    useEffect(() => {
        setInterval(async () => {
            await fetchInfo();
        }, 1000)

    }, []);
    function NavButtons(): JSX.Element {

        return (<>
            <li>
                <NavLink to="/donation" id="donationbtnNav">
                    Donation
                </NavLink>
            </li>
            <li>
                <NavLink to="/CreateEvents">
                    Create Events
                </NavLink>
            </li>
        </>)
    }
    const [modalShow, setModalShow] = useState(false);

    //Celo
    async function onClickConnectCelo() {
        let result = await window.ethereum.request({ method: 'eth_requestAccounts' });
        result;
        try {
            const getacc = await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0xaef3', }], //44787
            });
            getacc;
        } catch (switchError: any) {
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
        window.localStorage.setItem("ConnectedMetaCelo", "true")
    }

    async function onClickDisConnectCelo() {
        window.localStorage.setItem("ConnectedMetaCelo", "")

    }

    return (
        <nav className="main-nav">
            <ul>
                <NavButtons />

                <li>
                    <div id='withoutSign' className="wallets">
                        <div className="wallet">
                            <button type="button" onClick={onClickConnectCelo} className="btn btn-secondary" aria-disabled="false">
                                Connect to a wallet
                            </button>
                        </div>
                    </div>
                    <div id='installMeta' style={{ display: "none" }} className="wallets">
                        <div className="wallet">
                            <button type="button" onClick={() => { window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank") }} className="btn btn-secondary" aria-disabled="false">
                                Install Metamask
                            </button>
                        </div>
                    </div>

                    <div id="withSign" className="wallets" style={{ display: "none" }}>
                        <div className="wallet" style={{ height: 48, display: "flex", alignItems: "center" }}>
                            <div className="wallet__wrapper" style={{ display: "flex", alignItems: "center", height: "100%" }}>

                                <div className="wallet__info" >
                                    <div className="wallet__address" style={{ fontSize: 14, letterSpacing: "0.5px" }}>
                                        {acc}
                                    </div>
                                    <div className="wallet__balance" style={{ color: "rgb(236 190 33 / 50%)", fontSize: 12, letterSpacing: "0.6px" }}>
                                        {Balance}
                                    </div>
                                </div>
                                <button type="button" onClick={onClickDisConnectCelo} className="btn btn-logout" style={{ padding: 0 }}>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height={32} width={32} style={{ fill: "rgb(197, 228, 243)" }}>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
