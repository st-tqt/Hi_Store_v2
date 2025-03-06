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
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
