import React from 'react';
import { View, ScrollView } from 'react-native';
import viewStyles from "./src/components/styles/viewStyles";
import { Card, Header } from "./src/components/body/body";

export default function App() {
  return (
    <ScrollView contentContainerStyle={viewStyles.scroll} showsVerticalScrollIndicator={false}>
      <View style={viewStyles.container}>
      <Header/>
        <Card
          title="Tomar café e me preparar para o dia"
          description="Acordar às 09:00 e preparar-me para o dia ate as 12:00"
          imageUrl="https://cdn.worldvectorlogo.com/logos/c--4.svg"
          percent="12.5"
        />
        <Card
          title="Ir para a escola"
          description="Ficar na escola das 12:00 até as 19:00."
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg"
          percent="29.2"
        />
        <Card
          title="Estudar programação"
          description="Estudar programação das 19:00 até as 21:00."
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg"
          percent="8.3"
        />
        <Card
          title="Lazer"
          description="Tempo livre das 21:00 às 00:00."
          imageUrl="https://www.svgrepo.com/show/303206/javascript-logo.svg"
          percent="12.5"
        />
        <Card
          title="Dormir à meia-noite"
          description="Ir para a cama às 00:00 para descansar até as 09:00"
          imageUrl="https://cdn.worldvectorlogo.com/logos/c.svg"
          percent="37.5"
        />
      </View>
    </ScrollView>
  );
}

// Por Geovanne e Maria E. S.
//