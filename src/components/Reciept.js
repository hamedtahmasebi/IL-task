import "../styles/recieptPage.scss"
const Reciept = ({ data }) => {
    const {
        status,
        paymentType,
        bank,
        mobile,
        email,
        amountPaid,
        transactionId,
    } = data;
    return (
        <div id="reciept">
            <header>
                <h3
                    className={
                        status === "success" ? "success-text" : "primary-text"
                    }
                >
                    Payment {status === "success" ? "was successful" : "failed"}
                </h3>
                <span
                    className={`material-icons ${
                        status === "success" ? "success-icon" : "failure-icon"
                    }`}
                >
                    {status === "success" ? "done" : "close"}
                </span>
            </header>
            <main>
                <div>
                    <span>Payment Type</span>
                    <span>{paymentType}</span>
                </div>
                <div>
                    <span>Bank</span>
                    <span>{bank}</span>
                </div>
                <div>
                    <span>Mobile</span>
                    <span>{mobile}</span>
                </div>
                <div>
                    <span>E-mail</span>
                    <span>{email}</span>
                </div>
                <div>
                    <span>Amount paid</span>
                    <span>{amountPaid}</span>
                </div>
                <div>
                    <span>Transaction ID</span>
                    <span>{transactionId}</span>
                </div>
            </main>
            <footer>
                <a href="/" className="primary-btn">
                    Back to Home
                </a>
            </footer>
        </div>
    );
};

export default Reciept;
