import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';

export default function CategoryPage() {

  const categories = [
    {
      title: "Clothing",
      image: "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740",
      link: "/dashboard/clothing",
    },
    {
      title: "Electronics",
      image: "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=",
      link: "/dashboard/electronics",
    },
    {
      title: "Home & Kitchen",
      image: "https://gembah.com/wp-content/uploads/2022/07/home-kitchen-gadgets-scaled-1.jpeg",
      link: "/dashboard/home-kitchen",
    },
    {
      title: "Footwear",
      image: "https://media.istockphoto.com/id/1152527286/photo/boutique-shoes-in-a-store.jpg?s=612x612&w=0&k=20&c=-_8nvBm9UrJW65mZxROh7Nz6BfZEk7APnffzrNRwgkQ=",
      link: "/dashboard/footwear",
    },
    {
      title: "Accessories",
      image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      link: "/dashboard/accessories",
    },
  ];
  return (
    <View style={styles.catContainer}>
    

      {categories.map((category, index) => (
        <View key={index} style={styles.catCard}>
          <Image source={{ uri: category.image }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
         
            <Text style={styles.catTitle}>{category.title}</Text>
          
        </View>
      ))}
       
        
    
      
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  catContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 10,
  },
  catCard: {
    width: '48%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   
  
  },
  catTitle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
    letterSpacing: 2,
    
  },
});
