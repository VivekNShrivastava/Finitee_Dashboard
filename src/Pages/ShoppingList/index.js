import './shoppinglist.css'
import Index from "../../components/AppHearder/Index.js"
import Search from '../../components/SearchonPages/Index.js';

function ShoppingList() {
    return <>

        <Index />

        <div className="title_dashboard">
            <div className="vertical_line"></div>
            <div className="title"><h1 className="titleh1">Shopping List</h1></div>
        </div>


        <div className="shoppinglist_buttons">
            <button className="shoppinglist_button">Delete Shopping List</button>

        </div>

        <Search></Search>
    </>
}
export default ShoppingList;