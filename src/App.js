import React, { useEffect, useState } from "react";
import axios from "axios";

import Maps from "./components/common/container";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const url = "http://api.citybik.es/v2/networks";
      const data = await axios(url);
      setData(data.data.networks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <Maps data={data} />;
}

export default App;
