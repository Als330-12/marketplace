import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const products = [
  { id: 1, name: "هاتف ذكي", price: "1200 د.ل", icon: "📱" },
  { id: 2, name: "سماعات لاسلكية", price: "180 د.ل", icon: "🎧" },
  { id: 3, name: "ساعة ذكية", price: "350 د.ل", icon: "⌚" },
  { id: 4, name: "حقيبة", price: "120 د.ل", icon: "👜" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>متجري 🛍️</Text>
            <Text style={styles.subtitle}>كل ما تحتاجه في مكان واحد</Text>
          </View>

          <TouchableOpacity style={styles.cart}>
            <Text style={styles.cartText}>🛒</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.search}
          placeholder="🔍 ابحث عن منتج..."
          placeholderTextColor="#888"
        />

        <Text style={styles.sectionTitle}>الأقسام</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <TouchableOpacity style={styles.category}>
            <Text>📱</Text>
            <Text>إلكترونيات</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text>👕</Text>
            <Text>ملابس</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text>🏠</Text>
            <Text>منزل</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text>🎁</Text>
            <Text>هدايا</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>منتجات مميزة</Text>

        <View style={styles.products}>
          {products.map((product) => (
            <TouchableOpacity key={product.id} style={styles.product}>
              <View style={styles.productImage}>
                <Text style={styles.productIcon}>{product.icon}</Text>
              </View>

              <Text style={styles.productName}>{product.name}</Text>
              <
