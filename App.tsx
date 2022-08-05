import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";

export default function App() {
  const [Fecha, setFecha] = useState<string>("");
  const [Nombre, setNombre] = useState<string>("");
  const [Apellido, setApellido] = useState<string>("");
  const [Concepto, setConcepto] = useState<string>("");
  const [Codigo, setCodigo] = useState<string>("");
  const [Cuenta, setCuenta] = useState<string>("");
  const [Credito, setCredito] = useState<string>("");
  const [Debito, setDebito] = useState<string>("");

  const saveDate = (text: string) => {
    //validar que sea una fecha de verdad
    if (text.length >= 10 && text != "2022-07-29") {
      alert("Error fecha");
      return;
    } else Text.length >= 10;
    {
      setFecha(text);
      console.log(Fecha);
      
    }
  };

  const saveJournal = () => {};

  const saveName = (text: string) => {
    setNombre(text);
    console.log(text);
  };

  const saveLastName = (text: string) => {
    setApellido(text);
    console.log(text);
  };

  const saveConcepto = (text: string) => {
    setConcepto(text);
    console.log(text);
  };

  const saveCodigo = (text: string) => {
    setCodigo(text);
    console.log(text);
  };

  const saveCuenta = (text: string) => {
    setCuenta(text);
    console.log(text);
  };

  const isNumber = (text: string) => {
    const TextIsNumber = Number(text);
    return !Number.isNaN(TextIsNumber);
  };

  const saveCredit = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  const saveDebit = (text: string) => {
    console.log(
      `La variable text con valor ${text} es un numero ?: ${isNumber(text)}`
    );
  };

  return (
    <View>
      <Text> Journals </Text>

      <Text> Fecha: </Text>
      <TextInput placeholder="Fecha" onChangeText={(text) => saveDate(text)} />

      <Text> Nombre: </Text>
      <TextInput placeholder="Nombre" onChangeText={(text) => saveName(text)} />

      <Text> Apellido: </Text>
      <TextInput
        placeholder="Apellido"
        onChangeText={(text) => saveLastName(text)}
      />

      <Text> Concepto: </Text>
      <TextInput
        placeholder="Concepto"
        onChangeText={(text) => saveConcepto(text)}
      />

      <View>
        <Text> Codigo: </Text>
        <TextInput
          placeholder="Codigo"
          onChangeText={(text) => saveCodigo(text)}
        />

        <Text> Cuenta: </Text>
        <TextInput
          placeholder="Cuenta"
          onChangeText={(text) => saveCuenta(text)}
        />

        <Text> Credito: </Text>
        <TextInput
          placeholder="Credito"
          onChangeText={(text) => saveCredit(text)}
        />

        <Text> Debito: </Text>
        <TextInput
          placeholder="Debito"
          onChangeText={(text) => saveDebit(text)}
        />

        <Button title="Guardar" onPress={() => saveJournal()} />
      </View>
    </View>
  );
}

