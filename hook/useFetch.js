import { useState, useEffect } from "react";
import axios from "axios";
import { View } from "react-native-web";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return <View>h</View>;
};

export default useFetch;
