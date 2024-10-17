import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

const addToCart =(itemCode, price, qty, size, varrient, color)=>{
let myCart = cart;
if(myCart in itemCode)


}

  return (
    <>
    <Navbar />
    <Component {...pageProps} />;
    <Footer />
    </>
  )
}
