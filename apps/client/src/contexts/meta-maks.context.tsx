'use client'

import { ethers } from "ethers";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface metaMaskType {
    accounter: null[] | any[];
    signer: null | ethers.JsonRpcSigner
}

const MetaMaskContext = createContext<metaMaskType>({
    accounter: [null],
    signer: null
})

export function useMetaMask(): metaMaskType {
    return useContext(MetaMaskContext)
}

export function MetaMaskProvider({ children }: { children: ReactNode }): JSX.Element {
    const [accounter, setAccounter] = useState<null | any>(null)
    const [signer, setSigner] = useState<null | ethers.JsonRpcSigner>(null)

    useEffect(() => {
        async function connectToMemask(){
          if(!(window as any).ethereum){
            console.log("running");
            
            if((window as any).ethereum) {
              try{
                const {ethereum}  = window as any;
                const provider=new ethers.BrowserProvider(ethereum);
                const accounts=await ethereum.request({
                  method:"eth_requestAccounts"
                });
                const signer=await provider.getSigner();
                setAccounter(accounts[0]);
               
                setSigner(signer);
              }
              catch(err) {console.log(err)}
              
            }
            else alert("metamask is not detected in system");
          }
        }

        connectToMemask()
    }, [])
    
    return <MetaMaskContext.Provider value={{accounter, signer}}>{children}</MetaMaskContext.Provider>
}