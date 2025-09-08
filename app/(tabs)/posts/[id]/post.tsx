import type { PostWithContentDto } from "@/types/post";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Post() {
  const { userId, id, title, body } = useLocalSearchParams();

  const [post, setPost] = useState<PostWithContentDto | null>(null);

  useEffect(() => {
    setPost({
      userId: Number(userId),
      id: Number(id),
      title: title as string, // title as string: 타입스크립트에서 타입을 강제로 변경
      body: body as string,
    });
  }, []);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postInner}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>제목</Text>
          <Text style={styles.postTitleContetnt}>{post?.title}</Text>
        </View>
        <View style={styles.postBodyContainer}>
          <Text style={styles.postBody}>{post?.body}</Text>
        </View>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    alignItems: "center",
  },
  postInner: {
    width: WIDTH - 15,
    padding: 16,
    backgroundColor: "#fff",
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
  },
  postHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },

  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postTitleContetnt: {
    fontSize: 16,
    marginVertical: 5,
  },
  postBodyContainer: {
    margin: 5,
  },
  postBody: {
    fontSize: 16,
    marginTop: 5,
  },
});
