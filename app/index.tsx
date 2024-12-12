import { Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  },[])

  async function getData() {
    fetch('http://127.0.0.1:8000/api/barangs/')
  .then((response) => {
    if (response.ok) {
      return response.json(); 
    }
    throw new Error('response jaringan error');
  })
  .then((data) => {
    console.log(data.data); 
    setData(data.data);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
      {data.map((item) => (
        <View key={item.id} style={{ margin: 10 , backgroundColor: "red", padding: 10, borderRadius: 10}}>
          <Text>nama makanan :{item.name}</Text>
          <Text>harga satuan:{item.price}</Text>
          {/* <text>{item.transaksi_id}</text> */}
          <text> total_harga:{item.transaksis.total_harga}</text>
        </View>
      ))}
    </View>
  );
}
1