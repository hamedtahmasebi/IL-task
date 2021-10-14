import React from "react";
import Reciept from "../components/Reciept";
export const RecieptPage = () => {
    var dataForTest = {
        status: "success",
        paymentType: "Net banking",
        bank: "HDFC",
        mobile: "+555 256 148 21",
        email: "dev@gmail.com",
        amountPaid: "USD 2.0",
        transactionId: "AsnlgaLIFHVLE425321el",
    };

    return (
        <div id="reciept-page">
            <Reciept data={dataForTest} />
        </div>
    );
};

export default RecieptPage;
