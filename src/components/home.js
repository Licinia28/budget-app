
import AddItem from './addItem'
import {DisplayTransaction} from '.displayTransaction';


function Home()
{
    return(
        <div>
            <DisplayTransaction list={props } />
            <AddItem add = {props.add} />
        </div>
    );
}
export default Home;