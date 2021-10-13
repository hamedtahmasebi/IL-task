import React, { useState } from "react";
import Alert from "./Alert";
const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState([null, null, null, null]);
    const [isCardValid, setIsCardValid] = useState(null);
    const [expiryMonth, setExpiryMonth] = useState(null);
    const [expiryYear, setExpiryYear] = useState(null);
    const [nameOnCard, setNameOnCard] = useState(null);
    /* the function below changes the focus between 4 input fields of "Card Number" part,
    so the user doesn't need to change the input field mannualy*/
    const changeInput = el => {
        const { maxLength, value, id } = el.target;
        var nextSibling = document.querySelector(`#${id}`).nextSibling;

        const prevSibling = document.querySelector(`#${id}`).previousSibling;

        if (maxLength && value.length === maxLength && nextSibling !== null) {
            nextSibling.focus();
        }
        if (maxLength && value.length === 0 && prevSibling !== null) {
            prevSibling.focus();
        }
    };

    const onChangeCardNumber = e => {
        if (isNaN(e.target.value) || e.target.value.includes(".")) {
            setIsCardValid(false);
        } else {
            setIsCardValid(true);
        }
        var newArray = [...cardNumber];
        newArray[e.target.id.split("-")[1] - 1] = e.target.value;
        setCardNumber(newArray);
    };
    const onChangeExpiry = e => {
        const { name, value } = e.target;
        switch (name) {
            case "expiryMonth":
                setExpiryMonth(value);
                break;
            case "expiryYear":
                setExpiryYear(value);
                break;
            default:
                break;
        }
    };
    return (
        <form>
            <h3>Payment Form</h3>
            <div>
                <label>
                    <span class="material-icons">credit_card</span> Card Number
                </label>
                <div className="input-container">
                    <input
                        className="card-number"
                        placeholder="1111"
                        type="text"
                        id="cardInput-1"
                        value={cardNumber[0]}
                        maxLength={4}
                        onChange={e => {
                            changeInput(e);
                            onChangeCardNumber(e);
                        }}
                        autoComplete="cc-number"
                        required
                    />
                    <input
                        className="card-number"
                        placeholder="1111"
                        type="text"
                        id="cardInput-2"
                        value={cardNumber[1]}
                        maxLength={4}
                        onChange={e => {
                            changeInput(e);
                            onChangeCardNumber(e);
                        }}
                        autoComplete="cc-number"
                        required
                    />
                    <input
                        className="card-number"
                        placeholder="1111"
                        type="text"
                        id="cardInput-3"
                        value={cardNumber[2]}
                        maxLength={4}
                        onChange={e => {
                            changeInput(e);
                            onChangeCardNumber(e);
                        }}
                        autoComplete="cc-number"
                        required
                    />
                    <input
                        className="card-number"
                        placeholder="1111"
                        type="text"
                        id="cardInput-4"
                        value={cardNumber[3]}
                        maxLength={4}
                        onChange={e => {
                            changeInput(e);
                            onChangeCardNumber(e);
                        }}
                        autoComplete="cc-number"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="">
                    <span class="material-icons">date_range</span>
                    Expiry(MM/DD)
                </label>
                <div className="input-container">
                    <input
                        type="number"
                        name="expiryMonth"
                        id="expiryMonth"
                        placeholder="MM"
                        value={expiryMonth}
                        min={1}
                        max={12}
                        maxLength={2}
                        onChange={e => {
                            changeInput(e);
                            onChangeExpiry(e);
                        }}
                        required
                    />
                    <input
                        type="number"
                        name="expiryYear"
                        id="expiryYear"
                        placeholder="YY"
                        value={expiryYear}
                        min={1}
                        max={99}
                        maxLength={2}
                        onChange={e => {
                            changeInput(e);
                            onChangeExpiry(e);
                        }}
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="cvv">
                    <span class="material-icons">pin</span>CVV
                </label>
                <input
                    type="number"
                    min="0000"
                    max="9999"
                    name="CVV"
                    id="CVV"
                    value={nameOnCard}
                    placeholder="e.g. 123"
                    onChange={e => setNameOnCard(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="nameOnCard">
                    <span class="material-icons">account_box</span> Name On Card
                </label>
                <input
                    name="nameOnCard"
                    type="text"
                    placeholder="e.g. John Doe"
                    required
                />
            </div>
            {isCardValid === false ? (
                <Alert msg="Card number cannot contain characters" />
            ) : (
                <div style={{ height: "40px" }}></div>
            )}
            <div>
                <span style={{ fontWeight: "600" }}>Total :</span>{" "}
                <span style={{ fontWeight: "300" }} className="primary-text">
                    USD 6.0
                </span>
            </div>
            <button className="primary-btn" type="submit">
                Pay
            </button>
        </form>
    );
};

export default PaymentForm;
