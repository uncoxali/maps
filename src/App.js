import React, { useEffect, useState } from "react";
import axios from "axios";

import Maps from "./components/common/container";

function App() {
  const [data, setData] = useState();

  // const fetchData = async () => {
  //   try {
  //     const url = "http://api.citybik.es/v2/networks";
  //     const data = await axios(url);
  //     setData(data.data.networks);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchData = () => {
    const url = "http://api.citybik.es/v2/networks";
    axios(url)
      .then((res) => setData(res.data.networks))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Maps data={data} />;
}

export default App;
