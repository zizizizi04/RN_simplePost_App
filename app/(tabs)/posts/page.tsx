import { db } from "@/firebase/config";
import { PostDto } from "@/types/post";
import { Link } from "expo-router";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";

export default function posts() {
  const [posts, setPosts] = useState<PostDto[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const fetchPosts = async () => {
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );

    //   const data = await response.json();

    try {
      const postsQuery = query(
        collection(db, "post"), // post 테이블 조회
        orderBy("createDate", "desc") // createDate를 기준으로 내림차순 정렬
      );

      // const postsSnapshot = await getDocs(postsQuery);

      // const postsData = postsSnapshot.docs.map((doc) => {
      //   const { createDate, title, content } = doc.data();
      //   return {
      //     id: doc.id,
      //     createDate: createDate,
      //     title: title,
      //     content: content,
      //   };
      // });

      // await onSnapshot: post 컬렉션의 데이터를 실시간으로 가져옴
      //snapShop: Firestore에서 가져온 데이터
      await onSnapshot(postsQuery, (snapShop) => {
        const postsData = snapShop.docs.map((doc) => {
          const { createDate, title, content } = doc.data();

          return {
            id: doc.id,
            createDate: createDate as Timestamp,
            title: title,
            content: content,
          };
        });

        setPosts(postsData);
      });
    } catch (err) {
      console.log("오류 발생: " + err);
      setErr("오류 발생");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 가드 클로즈 패턴
  if (!posts) {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.loadingText}>로딩중...</Text>
      </View>
    );
  }

  return (
    <View style={styles.postContainer}>
      <FlatList
        data={posts}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Link
              href={{
                pathname: `/posts/[id]/post`, // [id]: 동적 라우팅
                params: {
                  id: item.id,
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
  loadingText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
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
