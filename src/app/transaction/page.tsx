'use client'

import TransactionInfoPage from "@components/TransactionInfoPage";
import Cart from "@domains/cart";

const TransactionPage = () => {
    const cart = new Cart();
    
    return <TransactionInfoPage cart={cart}/>
}

export default TransactionPage;