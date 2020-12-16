import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import React, { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { DetailScreenStackProp } from "../../types"
import { useSelector } from '../../redux/useRedux'

export default function DetailScreen(props: DetailScreenStackProp) {
  const character = useSelector(state => state.character)

  if (!character) {
    return null;
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: character.name,
    });
  }, [props.navigation]);

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

  return (
    <ScrollView style={styles.container} >
      <Card>
        <Card.Title title={character.name} left={LeftContent} />
        <Card.Cover source={{ uri: character.image }} style={styles.image} />
        <Card.Content>
          <Title>Character Info</Title>
          <Paragraph>Specie: {character.species}</Paragraph>
          <Paragraph>Origin: {character.origin}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  image: {
    width: '100%',
    height: 300
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  },
  subtext: {
    fontSize: 18,
    textAlign: 'center'
  }
});