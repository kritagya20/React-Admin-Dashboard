import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
    return (
        <Router>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Routes>
                    <Route path="/" element= {<Home/>} />
                    <Route path="/users/" element= {<UserList/>} />
                    <Route path="/users/:userId" element= {<User/>} />
                    <Route path="/newUser" element= {<NewUser/>} />
                    <Route path="/products/" element= {<ProductList/>} />
                    <Route path="/product/:productId" element= {<Product/>} />
                    <Route path="/newProduct" element= {<NewProduct/>} />
                </Routes>                    
            </div>
        </Router>
    )
}

export default App;