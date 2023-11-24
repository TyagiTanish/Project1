import React from "react";
import axios from "axios";
function axiousList() {
  // var config = {
  //   method: "get",
  //   url: "https://api.countrystatecity.in/v1/countries/IN/states/MH/cities",
  //   headers: {
  //     "X-CSCAPI-KEY": "API_KEY",
  //   },
  // };

  // axios(config)
  //   .then(function (response: any) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error: Error) {
  //     console.log(error);

  const getData = async () => {
    try {
      axios.interceptors.response.use((data: any) => {
        console.log(data.data.data[99].states);
        return data;
      });

      // setLoder(true);
      const data = await axios.get(
        // "https://countriesnow.space/api/v0.1/countries/states"
        "https://www.universal-tutorial.com/api/getaccesstoken"
        // {
        //   params: {
        //     page: page || null,
        //     limit: limit || null,
        //     sortBy: sort || null,
        //     search: search || null,
        //     order: order || null,
        //   },
        // }
      );
      // console.log(data);
      // setData(data);
      // setLoder(false);
    } catch (err) {
      // setLoder(false);
      // setError(true);
      // enqueueSnackbar(err, { autoHideDuration: 1000 });
      console.log("error...", err);
    }
  };

  getData();

  return <div>axiousList</div>;
}

export default axiousList;
