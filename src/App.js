import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import RecieptPage from "./pages/RecieptPage";
import "./styles/app.scss";
const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/payment" component={PaymentPage} />
                    <Route exact path="/reciept" component={RecieptPage} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
