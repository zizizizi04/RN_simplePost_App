import { db } from "@/firebase/config";
import { PostWithContentDto } from "@/types/post";
import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

export default function Post() {
  const router = useRouter();

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
          <View style={styles.postHeaderLeft}>
            <Pressable onPress={() => router.back()}>
              <Octicons name="chevron-left" size={24} color="black" />
            </Pressable>
          </View>
          <View style={styles.postHeaderRight}>
            <Pressable onPress={() => router.back()}>
              <Octicons name="bell" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => router.back()}>
              <Feather name="upload" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => router.back()}>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.postContentContainer}>
          <View style={styles.contentHeader}></View>
          <View style={styles.contentBody}>
            <View style={styles.contentTitleWrap}></View>
            <Text style={styles.postBody}>{post?.title}</Text>
            <View style={styles.contentBodyWrap}></View>
            <Text style={styles.postBody}>{post?.content}</Text>
          </View>
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
    marginTop: 60,
  },
  postInner: {
    width: WIDTH,
    backgroundColor: "#fff",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  postHeaderLeft: {},
  postHeaderRight: {
    flexDirection: "row",
    gap: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postTitleContetnt: {
    fontSize: 16,
    marginVertical: 5,
  },
  postContentContainer: {
    margin: 5,
  },
  postBody: {
    fontSize: 16,
    marginTop: 5,
  },
  contentHeader: {},
  contentBody: {},
});
