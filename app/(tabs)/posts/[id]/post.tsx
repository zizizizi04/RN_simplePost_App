import { db } from "@/firebase/config";
import { PostWithContentDto } from "@/types/post";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Post() {
  // useLocalSearchParams: 동적 라우팅을 위한 파라미터를 가져오는 함수
  // 파라미터값을 문자열로 취급
  const { postId } = useLocalSearchParams();

  const [post, setPost] = useState<PostWithContentDto | null>(null);

  const fetchPost = async () => {
    try {
      const postsQuery = query(
        collection(db, "post"), // post 테이블 조회
        where("postId", "==", Number(postId))
      );

      const postSnapshot = await getDocs(postsQuery);

      const post = postSnapshot.docs[0].data();

      // post as PostWithContentDto : 타입 캐스팅
      setPost(post as PostWithContentDto);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <View style={styles.postContainer}>
      <View style={styles.postInner}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>제목</Text>
          <Text style={styles.postTitleContetnt}>{post?.title}</Text>
        </View>
        <View style={styles.postBodyContainer}>
          <Text style={styles.postBody}>{post?.content}</Text>
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
