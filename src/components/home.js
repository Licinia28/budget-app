import AddItem from "./components/addItem";
import {DisplayTransaction} from "./components/displayTransaction";


function Home()
{
    return(
        <div>
            <DisplayTransaction list={transaction} />
            <AddItem add = {addTransaction} />
        </div>
    );
}
export default Home;