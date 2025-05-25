import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const messages = [
  {
    id: '1',
    name: 'Barbie',
    message: 'Vamos para a festa',
    time: '3m atrás',
    unread: 3,
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Barbie_Pink_Shoes.png/220px-Barbie_Pink_Shoes.png',
  },
  {
    id: '2',
    name: 'Tom',
    message: 'Quase peguei ele dessa vez',
    time: '5m atrás',
    unread: 1,
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Tom_Tom_and_Jerry.png',
  },
  {
    id: '3',
    name: 'Jerry',
    message: 'Me pegue se conseguir',
    time: '1h atrás',
    unread: 2,
    avatar: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png',
  },
];

function LoginScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('ListaContatos')} />
      <Button title="Cadastrar-se" onPress={() => navigation.navigate('CadastroUsuario')} />
    </View>
  );
}

function RegisterUserScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ContactListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        {item.unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.unread}</Text>
          </View>
        )}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>
      <Button title="Cadastrar Novo Contato" onPress={() => navigation.navigate('CadastroContato')} />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
}

function ContactFormScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Cadastro de Contato</Text>
      <Button title="Salvar" onPress={() => navigation.navigate('ListaContatos')} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ContactEditScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Editar Contato</Text>
      <Button title="Salvar Alterações" onPress={() => navigation.navigate('ListaContatos')} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuario" component={RegisterUserScreen} />
        <Stack.Screen name="ListaContatos" component={ContactListScreen} />
        <Stack.Screen name="CadastroContato" component={ContactFormScreen} />
        <Stack.Screen name="EditarContato" component={ContactEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#3b5bfd',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
