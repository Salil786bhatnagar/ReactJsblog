import React,{useContext} from 'react'
import { store } from '../ContextApi_Folder/MainContainer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Count = () => {
    const [data, setData] = useContext(store);
  return (
    <div>
        <h2>Component Count</h2><span><ShoppingCartIcon/>{data.length}</span>
    </div>
  )
}

export default Count