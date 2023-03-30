import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Textcontext = createContext(null)
export { Textcontext }

const Textprovider = ({ children }) => {

    const [visibility, setVisibility] = useState("")
    let [mode, setMode] = useState(true)
    // const [lastname, setLastname] = useState("")
    // const [businessname, setBusinessname] = useState("")
    // const [type, setType] = useState("")
    // const [revenue, setRevenue] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [number, setNumber] = useState("")
    // let [cart, setCart] = useState([])
    // const [item, setItem] = useState(null)
    // const [details, setDetails] = useState([])
    // const [diningOptionId, setDiningOptionId] = useState("")
    // const [tableId, setTableId] = useState("")
    // const [customerId, setCustomerId] = useState("")
    // const [staffId, setStaffId] = useState("")
    // const [orderItems, setOrderItems] = useState([])
    // let [amount, setAmount] = useState(0)
    // let isMounted = true
    // const [fResults, setFResults] = useState([])
    // const [sInput, setSInput] = useState('')
    // const [estName, setEstName] = useState("")
    // const [p, setP] = useState(1);
    // const [display, setDisplay] = useState(true)
    // const [isMount, setIsMount] = useState(true)
    let [forget_password, setForget_Password] = useState({})


    useEffect(() => {
        let mode = JSON.parse(localStorage.getItem('mode'))

        // if (user != null) {
        //     userDetails = user
            // const fetch = () => {
                // cart.forEach(e => {
                //     amount = amount + (Number(e.selling_price) * e.count)
                //     setAmount(amount)
                // });

            // }

            // if (isMounted) fetch();
            // setCart([...cart])
            // // console.log(cart)

            // return () => {
            //     isMounted = false
            // }

        // }



        return;
    }, [])



    // const routeDeterminer = (ev) => {
    //     setText_navigator(ev)
    // }
    // const cartMenu = (ev) => {
    //     cart.push(ev)
    //     setCart([...cart])
    //     amount = amount + (Number(ev.selling_price))
    //     setAmount(amount)
    //     localStorage.setItem('cartItem', JSON.stringify(cart))
    //     // fetch()
    //     // window.location.reload()
    // }

    // const deleteCart = (ev) => {
    //     amount = amount - (Number(cart[ev].selling_price) * cart[ev].count)
    //     setAmount(amount)
    //     cart.splice(ev, 1)
    //     setCart([...cart])
    //     localStorage.setItem('cartItem', JSON.stringify(cart))
    //     // fetch()
    // }
    // const addCart = (ev) => {
    //     cart[ev].count++
    //     setCart([...cart])
    //     amount = amount + (Number(cart[ev].selling_price))
    //     setAmount(amount)
    //     localStorage.setItem('cartItem', JSON.stringify(cart))
    //     // fetch()
    // }
    // const subCart = (ev) => {

    //     if (cart[ev].count === 1) {
    //         cart[ev].count = 1
    //         setCart([...cart])
    //     }
    //     else {
    //         cart[ev].count--
    //         setCart([...cart])
    //         amount = amount - (Number(cart[ev].selling_price))
    //         setAmount(amount)
    //         // window.location.reload()
    //     }

    //     localStorage.setItem('cartItem', JSON.stringify(cart))
    //     // fetch()
    // }

    return (
        <Textcontext.Provider value={
            {
                // text_navigator,
                // routeDeterminer,
                visibility,
                setVisibility,
                mode,
                setMode,
                // lastname,
                // setLastname,
                // businessname,
                // setBusinessname,
                // type,
                // setType,
                // revenue,
                // setRevenue,
                // email,
                // setEmail,
                // password,
                // setPassword,
                // number,
                // setNumber,
                // item,
                // setItem,
                // details,
                // setDetails,
                // cart,
                // cartMenu,
                // deleteCart,
                // addCart,
                // subCart,
                // diningOptionId,
                // setDiningOptionId,
                // tableId,
                // setTableId,
                // customerId,
                // setCustomerId,
                // staffId,
                // setStaffId,
                // orderItems,
                // setOrderItems,
                // amount,
                // fResults,
                // setFResults,
                // sInput,
                // setSInput,
                // estName,
                // setEstName,
                // p,
                // setP,
                // display,
                // setDisplay,
                // isMount,
                // setIsMount,
                forget_password, 
                setForget_Password
            }
        }>
            {children}
        </Textcontext.Provider>
    )
}
export default Textprovider;