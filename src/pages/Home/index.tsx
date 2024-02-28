import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";
import DropDown from "../../components/Dropdow";
import { Header } from "../../components/Header";

export default function Home() {
  const [cor, setCor] = useState("black");
  const [cor2, setCor2] = useState("black");
  const [cor3, setCor3] = useState("black");

  const [faixa1, setFaixa1] = useState<undefined | string>(undefined);
  const [faixa2, setFaixa2] = useState<undefined | string>(undefined);
  const [faixa3, setFaixa3] = useState<undefined | string>(undefined);

  const [prnum, setPrnum] = useState<string>("");
  const [segnum, setSegnum] = useState<string>("");
  const [multi, setMulti] = useState<number>(0);

  const [resistor, setResistor] = useState<number | string>();

  const faixas3 = [
    {
      res: "Preto",
      cor: "black",
      multi: 1,
    },
    {
      res: "Marrom",
      cor: "brown",
      multi: 10,
    },
    { res: "Vermelho", cor: "red", multi: 100 },
    { res: "Laranja", cor: "orange", multi: 1000 },
    { res: "Amarelo", cor: "yellow", multi: 10000 },
    { res: "Verde", cor: "green", multi: 100000 },
    {
      res: "Azul",
      cor: "blue",
      multi: 1000000,
    },
  ];
  const faixas2 = [
    {
      res: "Preto",
      cor: "black",
      faixa: "0",
    },
    {
      res: "Marrom",
      cor: "brown",
      faixa: "1",
    },
    { res: "Vermelho", cor: "red", faixa: "2" },
    { res: "Laranja", cor: "orange", faixa: "3" },
    { res: "Amarelo", cor: "yellow", faixa: "4" },
    { res: "Verde", cor: "green", faixa: "5" },
    {
      res: "Azul",
      cor: "blue",
      faixa: "6",
    },
    { res: "Violeta", cor: "purple", faixa: "7" },
    { res: "Cinza", cor: "gray", faixa: "8" },
    { res: "Branco", cor: "white", faixa: "9" },
  ];
  const faixas1 = [
    {
      res: "Marrom",
      cor: "brown",
      faixa: "1",
    },
    { res: "Vermelho", cor: "red", faixa: "2" },
    { res: "Laranja", cor: "orange", faixa: "3" },
    { res: "Amarelo", cor: "yellow", faixa: "4" },
    { res: "Verde", cor: "green", faixa: "5" },
    {
      res: "Azul",
      cor: "blue",
      faixa: "6",
    },
    { res: "Violeta", cor: "purple", faixa: "7" },
    { res: "Cinza", cor: "gray", faixa: "8" },
    { res: "Branco", cor: "white", faixa: "9" },
  ];

  function cacl() {
    if (!faixa1 || !faixa2 || !faixa3) {
      alert("Por favor, insira todas as faixas");
    } else {
      let ver = 0;
      ver = Number(prnum + segnum) * multi;

      if (ver >= 1000) {
        setResistor(Intl.NumberFormat("pt-BR").format(ver / 1000) + " Kohm");
      } else {
        setResistor(ver + " ohm");
      }
    }
  }

  return (
    <><Header title="𝑹𝒆𝒔𝒊𝒔𝒕𝒐𝒓𝑴𝒂𝒕𝒉" />
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Image style={styles.img} source={require("../../assets/imgs/resistor.png")} />
          <View
            style={{
              left: 106,
              marginTop: 13,
              height: 75,
              width: 22,
              position: "absolute",
              backgroundColor: cor,
            }}
          ></View>
          <View
            style={{
              marginTop: 13,
              height: 75,
              width: 22,
              position: "absolute",
              left: 143,
              backgroundColor: cor2,
            }}
          ></View>
          <View
            style={{
              marginTop: 13,
              height: 75,
              width: 22,
              left: 180,
              position: "absolute",
              backgroundColor: cor3,
            }}
          ></View>
        </View>
        <View
          style={styles.containerforms}
        >
          <Text style={{ fontSize: 20 }}>
            𝑉𝑎𝑙𝑜𝑟 𝑑𝑜 𝑅𝑒𝑠𝑖𝑠𝑡𝑜𝑟:  {resistor ? (
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                {resistor}
              </Text>
            ) : (
              <></>
            )}
          </Text>

        </View>
        <View style={styles.containerforms}>
          <DropDown
            setC={setCor}
            data={faixas1}
            onSelect={(v) => {
              if (typeof v == "string") return;
              setFaixa1(v.res);
              setCor(v.cor);
              setPrnum(v.faixa);
            }}
            clean={() => setFaixa1("")}
            placeholder="Primeira Faixa"
            renderItem={({ item }) => <Text>{item.res}</Text>}
            value={faixa1} />

          <DropDown
            setC={setCor2}
            data={faixas2}
            onSelect={(v) => {
              if (typeof v == "string") return;
              setFaixa2(v.res);
              setCor2(v.cor);
              setSegnum(v.faixa);
            }}
            clean={() => setFaixa2("")}
            placeholder="Segunda Faixa"
            renderItem={({ item }) => <Text>{item.res}</Text>}
            value={faixa2} />
          <DropDown
            setC={setCor3}
            data={faixas3}
            onSelect={(v) => {
              if (typeof v == "string") return;
              setFaixa3(v.res);
              setCor3(v.cor);
              setMulti(v.multi);
            }}
            clean={() => setFaixa3("")}
            placeholder="Multiplicador"
            renderItem={({ item }) => (
              <Text style={{ fontSize: 14 }}>{item.res}</Text>
            )}
            value={faixa3} />

          <View>
            <TouchableOpacity style={styles.button}
              onPress={cacl}>
              <Text style={{ textAlign: "center", color: 'white', fontSize: 15, fontWeight: 'bold' }}>Calcula</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View></>
  );
}
