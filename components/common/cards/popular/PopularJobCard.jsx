import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = () => {
  return (
    <TouchableOpacity
      style={styles.container(seletedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(seletedJob, item)}>
        <Image source={{ url: item.employer_logo }} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={styles.companyName}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(seletedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
