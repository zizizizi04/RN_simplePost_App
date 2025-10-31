import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen() {
  const handleStart = () => {
    console.log("회원가입");
  };

  const handleLogin = () => {
    console.log("로그인");
  };

  return (
    <View style={styles.container}>
      {/* 로고 이미지 */}
      <Image
        source={{
          uri: "https://play-lh.googleusercontent.com/3SJJjKcOyb1_1I0Fo4J8vPyLh_Pd2H6vUZUyE_xmHqZfBuQ3p7yO3y-YXaeCVKFX1Zk=w240-h480-rw",
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* 타이틀 */}
      <Text style={styles.title}>당신 근처의 당근마켓</Text>

      {/* 서브텍스트 */}
      <Text style={styles.subtitle}>
        내 동네를 설정하고{"\n"}당근마켓을 시작해보세요.
      </Text>

      <View style={styles.footerContainer}>
        {/* 시작하기 버튼 */}
        <TouchableOpacity
          style={styles.startButton}
          activeOpacity={0.8}
          onPress={handleStart}
        >
          <Text style={styles.startButtonText}>시작하기</Text>
        </TouchableOpacity>

        {/* 하단 텍스트 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>이미 계정이 있나요? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 80,
  },
  footerContainer: {
    marginTop: 100,
  },
  startButton: {
    backgroundColor: "#FF8A3D",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  footerText: {
    fontSize: 14,
    color: "#999",
  },
  loginText: {
    fontSize: 14,
    color: "#FF8A3D",
    fontWeight: "600",
  },
});
