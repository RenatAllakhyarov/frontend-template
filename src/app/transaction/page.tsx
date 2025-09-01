'use client'

import Cart from "@domains/cart";
import TransactionInfoPage from "@components/TransactionInfoPage";

const TransactionPage = () => {
    const cart = new Cart();
    
    return <TransactionInfoPage cart={cart}/>
}

export default TransactionPage;