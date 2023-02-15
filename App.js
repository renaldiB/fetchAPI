import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState([true]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoad(false))
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoad ? <Text style={{ fontSize: 50, textAlign: 'center' }}>Loading</Text> : (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <FlatList
            data={data.products}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text style={{ color: "black" }}>{item.title + ' \nPrice: $' + item.price + "\n"}</Text>
            )}
          />
        </View>
      )}
    </View>
  )
}