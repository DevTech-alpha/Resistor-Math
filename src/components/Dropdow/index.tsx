import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import DropdowProps from "../../props/DropdowProps";


export default function DropDown<T>({
  setC,
  data,
  placeholder,
  onSelect,
  value,
  renderItem,
  clean,
}: DropdowProps<T>) {
  const [ShowData, setShowData] = useState(false);

  const seleciona = (item: T | string) => {
    onSelect(item);
    setShowData(false);
  };

  function del() {
    clean()
    setC("black");
  }

  return (
    <View style={{ width: "90%", marginBottom: 10 }}>
      <View style={styles.container}>
        <Pressable
          style={styles.selecBtn}
          onPress={() => setShowData((old) => !old)}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={styles.placeholder}>{value || placeholder}</Text>
            <View style={{ flexDirection: "row" }}>
              {value ? (
                <AntDesign
                  name="close"
                  size={20}
                  color="black"
                  onPress={del}
                />
              ) : (
                <></>
              )}
            </View>
          </View>

          {ShowData && data && data.length > 0 && (
            <ScrollView style={{ height: 70, overflow: "hidden" }}>
              {data.map((item, index) => (
                <Pressable
                  key={index}
                  style={styles.item}
                  onPress={() => seleciona(item)}
                >
                  {renderItem({ item })}
                </Pressable>
              ))}
            </ScrollView>
          )}
        </Pressable>
      </View>
    </View>
  );
}
