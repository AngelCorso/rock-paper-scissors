import React from "react";
import { Stack, Text, Flex } from "@react-native-material/core";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Avatar, Badge } from "@rneui/themed";
import useGame from "./useGame";

const CombatScreen = () => {
  const {
    choosePath,
    handlePlayerChoice,
    playerWins,
    computerWins,
    lastResult,
    currentWinner,
    playerChoice,
    computerChoice,
  } = useGame();

  return (
    <Stack spacing={2} style={{ margin: 16 }}>
      <Text style={{ alignSelf: "center" }} h1>
        Piedra, Papel, Tijeras
      </Text>
      <Flex direction="row" justify="evenly" marginTop={15}>
        <Flex style={styles.winnerCard}>
          <Text>Jugador</Text>
          <Text alignSelf="center">{playerWins}</Text>
        </Flex>
        <Flex style={styles.winnerCard}>
          <Text>Computadora</Text>
          <Text alignSelf="center">{computerWins}</Text>
        </Flex>
      </Flex>
      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={() => handlePlayerChoice("0")}
      >
        <Image
          source={require("./assets/images/piedra.jpg")}
          style={styles.image}
        ></Image>
      </TouchableOpacity>
      <Flex direction="row" justify="evenly" marginTop={15}>
        <TouchableOpacity onPress={() => handlePlayerChoice("1")}>
          <Image
            source={require("./assets/images/papel.jpg")}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePlayerChoice("2")}>
          <Image
            source={require("./assets/images/tijera.jpg")}
            style={styles.image}
          ></Image>
        </TouchableOpacity>
      </Flex>
      <Flex marginTop={15} justify="between" direction="row">
        <View alignItems="center">
          <Text style={{ color: "black" }} marginBottom={10}>
            ¿Quién va ganando?
          </Text>
          <Avatar
            rounded
            source={choosePath(currentWinner)}
            size="large"
            containerStyle={{ justify: "center" }}
          />
          <Badge
            status="primary"
            value={currentWinner}
            containerStyle={{ position: "absolute", top: 30, left: 55 }}
          />
        </View>
        <View>
          <Text style={{ color: "black" }} marginBottom={10} alignSelf="center">
            Último resultado
          </Text>
          <Text style={{ color: "black" }} marginBottom={10} alignSelf="center">
            {lastResult}
          </Text>
          <Text style={{ color: "black" }} alignSelf="center">
            Jugador eligió {playerChoice}
          </Text>
          <Text style={{ color: "black" }} alignSelf="center">
            PC eligió {computerChoice}
          </Text>
        </View>
      </Flex>
      {/* <TextInput
                style={{ height: 40 }}
                label="Nombre" variant="standard"
                onChangeText={(text) => setNombre(text)}
                value={nombre}
                accessibilityLabel="nombre"
            />
            <TextInput
                placeholder="Escribe aqui tu apellido"
                onChangeText={(text) => setApellido(text)}
                value={apellido}
                label="Apellido" variant="standard"
                accessibilityLabel="apellido"
            />
            <Button title="Obtener Nombre Completo" onTouchEnd={calculaNombreCompleto} />
            <Text style={{ margin: 16 }} testID="nombreCompleto" accessibilityLabel='nombreCompleto'>
                {nombreCompleto}
            </Text> */}
    </Stack>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 84,
    height: 150,
    marginRight: 5,
    objectFit: "contain",
    alignSelf: "center",
  },
  winnerCard: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default CombatScreen;
