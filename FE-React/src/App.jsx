import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import axios from "./util/axiosCustomize"
import { useEffect } from "react"


function App() {

  useEffect(() => {
    const fetchHelloworld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(">>> check res: ", res);
    }

    fetchHelloworld()
  }, [])

  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  )
}

export default App
