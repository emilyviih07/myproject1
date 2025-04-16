// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  {
    id: '1',
    name: 'Barbie',
    message: 'Vamos para a festa',
    time: '3m atrás',
    unread: 3,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Barbie_Pink_Shoes.png/220px-Barbie_Pink_Shoes.png',
  },
  {
    id: '2',
    name: 'Tom ',
    message: 'Quase peguei ele dessa vez',
    time: '5m atrás',
    unread: 1,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Tom_Tom_and_Jerry.png',
  },
  {
    id: '3',
    name: 'Jerry',
    message: 'Me pegue se conseguir',
    time: '1h atrás',
    unread: 2,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png',
  },
  {
    id: '4',
    name: 'Scooby-Doo',
    message: 'Salcichaaa',
    time: '2h atrás',
    unread: 1,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/3/3d/Scooby-Doo.png',
  },
  {
    id: '5',
    name: 'Bob esponja',
    message: 'Estou pronto',
    time: '5h atrás',
    unread: 0,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/3/33/SpongeBob_SquarePants_character.svg',
  },
  {
    id: '6',
    name: 'Velma',
    message: 'AAAAAAAA',
    time: 'Ontem',
    unread: 0,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/d/d3/Velma_Dinkley.png',
  },
  {
    id: '7',
    name: 'Mickey Mouse',
    message: 'Oh, céus',
    time: 'Ontem',
    unread: 0,
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png',
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.rightSection}>
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
      <View style={styles.headerWrapper}>
        <View style={styles.blueShape} />
        <View style={styles.mailIconContainer}>
          <View style={styles.mailCircle}>
            <Ionicons name="mail-outline" size={24} color="#3b5bfd" />
          </View>
        </View>
        <Text style={styles.headerTitle}>Mensagens e bate-papo</Text>
        <View style={styles.headerActions}>
          <Text style={styles.markAll}>Marcar tudo como lido</Text>
          <View style={styles.sortBy}>
            <Text style={styles.sortText}>Classificar por tempo</Text>
            <Ionicons name="chevron-down" size={14} color="#000" />
          </View>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messageList}
      />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Ionicons name="home-outline" size={24} color="#2f3e75" />
          <Text style={styles.footerText}>Início</Text>
        </View>
        <View style={[styles.footerItem, styles.activeTab]}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#3b5bfd" />
          <Text style={[styles.footerText, styles.activeText]}>Conversas</Text>
          <View style={styles.activeIndicator} />
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="mail-outline" size={24} color="#2f3e75" />
          <Text style={styles.footerText}>E-mail</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="person-outline" size={24} color="#2f3e75" />
          <Text style={styles.footerText}>Perfil</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
  },
  headerWrapper: {
    backgroundColor: '#f9f9fb',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'relative',
  },
  blueShape: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 160,
    height: 160,
    backgroundColor: '#3b5bfd',
    borderBottomRightRadius: 160,
    zIndex: -1,
  },
  mailIconContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  mailCircle: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f3e75',
    alignSelf: 'center',
    marginTop: 30,
  },
  headerActions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  markAll: {
    fontSize: 14,
    color: '#000',
  },
  sortBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 14,
    color: '#000',
    marginRight: 4,
  },
  messageList: {
    padding: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  messageText: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  message: {
    color: '#666',
    fontSize: 14,
  },
  rightSection: {
    alignItems: 'flex-end',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#2f3e75',
    marginTop: 4,
  },
  activeTab: {
    position: 'relative',
  },
  activeText: {
    color: '#3b5bfd',
    fontWeight: 'bold',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -6,
    height: 3,
    width: 20,
    backgroundColor: '#3b5bfd',
    borderRadius: 2,
  },
});
