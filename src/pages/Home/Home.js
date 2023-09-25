import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'

import { addFavorite, deleteFavorite } from '../../context/Slice'

import styles from './Home.style'

const Home = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite)
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character')
      setData(response.data)      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  
  const renderCharacter = ({item}) => {
    const isFav = favorite.find(q => q.id == item.id)
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <View style={styles.body_item}>
        <Image style={styles.image} source={{uri: item.image}}/>
        {
          isFav ? (<Pressable onPress={() => dispatch(deleteFavorite(item))}>
          <Icon style={styles.icon} name='heart' size={36} color={'red'}/>
          </Pressable>) : (<Pressable onPress={() => dispatch(addFavorite(item))}>
        <Icon style={styles.icon} name='heart-outline' size={36} color={'red'}/>
        </Pressable>)
        }
        </View>
      </View>
    )
  }
  return (
    <View>
      <FlatList data={data.results} renderItem={renderCharacter}/>
    </View>
  )
}

export default Home