import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { emptyFavorite } from '../../context/Slice'

import styles from './Favorite.style'

const Favorite = () => {
  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorite)

const renderFav = ({item}) => <Text style={styles.text}>*{item.name}</Text>

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(emptyFavorite())}>
        <Text style={styles.button}>Remove</Text>
      </Pressable>
      <FlatList data={favorite} renderItem={renderFav}/>
    </View>
  )
}

export default Favorite