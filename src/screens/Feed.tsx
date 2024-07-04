import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  text: string;
  likes: number;
  comments: number;
}

export default function Feed() {
  const userName = "Wade Wilson"; // Nome do usuário
  const profileImageUrl = "https://w7.pngwing.com/pngs/483/498/png-transparent-deadpool-desktop-film-cable-deadpool-superhero-fictional-character-deadpool.png"; // URL da foto de perfil
  const description = "Mercenário Tagarela | Ama chimichangas e quebrar a quarta parede."; // Descrição do usuário

  const [posts, setPosts] = useState<Post[]>([]);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const fetchedPosts = response.data.slice(0, 1).map((post: any) => ({
        id: post.id,
        username: 'Deadpool',
        avatarUrl: 'https://w7.pngwing.com/pngs/483/498/png-transparent-deadpool-desktop-film-cable-deadpool-superhero-fictional-character-deadpool.png',
        imageUrl: Math.random() < 0.5
          ? 'https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/XERGRFYAXVEHTI4Y2WJ4IENP6M.jpg?auth=a4a66d2abc55e4b72746ba343e55a309b2f352af2798054baa3cc86dd8edbb33&width=1393&height=699'
          : 'https://portalpopline.com.br/wp-content/uploads/2024/05/capa-deadpool-wolverine-2-jpg.webp',
        text: 'Vamo nessa porra!!!',
        likes: Math.floor(Math.random() * 10),
        comments: Math.floor(Math.random() * 50)
      }));
      setPosts(fetchedPosts); // Define os posts obtidos no estado
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleLike = (postId: string) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleComment = (postId: string) => {
    setCurrentPostId(postId);
    setCommentModalVisible(true);
  };

  const addComment = () => {
    if (!currentPostId || !newCommentText) return;

    const updatedPosts = posts.map(post => {
      if (post.id === currentPostId) {
        return { ...post, comments: post.comments + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewCommentText('');
    setCommentModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {posts.length > 0 && (
        <View style={styles.postContainer}>
          <Text style={styles.postText}>{posts[0].text}</Text>
          <Image source={{ uri: posts[0].imageUrl }} style={styles.postImage} resizeMode="contain" />
          <View style={styles.postHeader}>
            <Image source={{ uri: posts[0].avatarUrl }} style={styles.avatar} />
            <Text style={styles.postUsername}>{posts[0].username}</Text>
          </View>
          <View style={styles.postFooter}>
            <TouchableOpacity style={styles.button} onPress={() => handleLike(posts[0].id)}>
              <MaterialIcons name="thumb-up" size={20} color="#007bff" />
              <Text style={styles.buttonText}>Curtir ({posts[0].likes})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleComment(posts[0].id)}>
              <MaterialIcons name="comment" size={20} color="#007bff" />
              <Text style={styles.buttonText}>Comentar ({posts[0].comments})</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Modal
        visible={commentModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCommentModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu comentário..."
              onChangeText={text => setNewCommentText(text)}
              value={newCommentText}
              multiline={true}
            />
            <Button title="Comentar" onPress={addComment} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postText: {
    padding: 10,
    fontWeight: 'bold',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    minHeight: 100,
  },
});
