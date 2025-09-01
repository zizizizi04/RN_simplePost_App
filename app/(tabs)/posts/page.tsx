import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default function posts() {
  const [posts, setPosts] = useState<
    { userId: number; id: number; title: string; body: string }[]
  >([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={posts}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text style={styles.postId}>{item.id}번 게시물</Text>
            <Link
              href={{
                pathname: `/posts/[id]/post`, // [id]: 동적 라우팅
                params: {
                  userId: item.userId,
                  id: item.id,
                  title: item.title,
                  body: item.body,
                },
              }}
            >
              <Text style={styles.postTitle}>{item.title}</Text>
            </Link>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    alignItems: "center",
  },
  listWrap: {
    width: WIDTH - 16,
    paddingTop: 70,
    paddingBottom: 16,
    paddingHorizontal: 6,
  },
  postItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 100,
  },
  postId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postTitle: {
    fontSize: 16,
    marginTop: 5,
  },
});
