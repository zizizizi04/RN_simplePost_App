import { Ionicons } from "@expo/vector-icons"; // 아이콘용
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PostWriteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneText}>완료</Text>
        </TouchableOpacity>
      </View>

      {/* 주제 선택 */}
      <TouchableOpacity style={styles.topicSelector}>
        <Text style={styles.topicText}>게시글의 주제를 선택해주세요.</Text>
      </TouchableOpacity>

      {/* 제목 입력 */}
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력하세요."
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      {/* 내용 입력 */}
      <ScrollView style={styles.contentContainer}>
        <TextInput
          style={styles.contentInput}
          placeholder="이야기를 나눠보세요.
          #맛집 #병원 #산책..."
          placeholderTextColor="#777"
          multiline
          value={content}
          onChangeText={setContent}
          textAlignVertical="top"
        />
      </ScrollView>

      {/* 하단 메뉴 */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuButton}>
          <Ionicons name="image-outline" size={24} color="white" />
          <Text style={styles.bottomMenuText}>사진</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuButton}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={styles.bottomMenuText}>장소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuButton}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="white"
          />
          <Text style={styles.bottomMenuText}>투표</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomMenuButton}>
          <Ionicons name="pricetag-outline" size={24} color="white" />
          <Text style={styles.bottomMenuText}>태그</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // 다크 모드 배경
    paddingHorizontal: 16,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    paddingBottom: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  doneButton: {},
  doneText: {
    color: "#fff",
    fontSize: 16,
  },
  topicSelector: {
    borderBottomWidth: 1,
    borderColor: "#333",
    paddingVertical: 12,
  },
  topicText: {
    color: "#ccc",
    fontSize: 16,
  },
  titleInput: {
    color: "white",
    fontSize: 18,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#333",
  },
  contentContainer: {
    flex: 1,
    marginTop: 12,
    marginBottom: 60, // 하단 메뉴 공간 확보
  },
  contentInput: {
    color: "white",
    fontSize: 16,
    minHeight: 200,
    textAlignVertical: "top",
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#333",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#121212",
  },
  bottomMenuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenuText: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 5,
  },
});
