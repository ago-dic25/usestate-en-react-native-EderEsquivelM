import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nombre, setNombre] = useState('');

  const obtenerEmoji = () => {
    if (nombre.length === 0) return '🤔';
    if (nombre.length < 10) return '🙂';
    if (nombre.length < 15) return '😄';
    return '🤩';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Captura tu nombre:</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#87a1ab"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.texto}>
        Tu nombre es: <Text style={styles.resaltado}>{nombre || '---'}</Text>
      </Text>

      <Text style={styles.texto}>
        Caracteres: {nombre.replace(/\s/g, '').length} {obtenerEmoji()}
      </Text>

      <TouchableOpacity style={styles.boton} onPress={() => setNombre('')}>
        <Text style={styles.textoBoton}>Limpiar 🧹</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8dfe2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#547071', 
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  texto: {
    color: '#547071',
    fontSize: 16,
  },
  resaltado: {
    color: '#a7bcf7', 
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#87a1ab',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#688391',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
