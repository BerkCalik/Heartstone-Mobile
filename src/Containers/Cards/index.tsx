import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../Redux/Hooks';
import {updateList, updateSelected} from '../../Redux/Slices/Cards';
import {getCards} from '../../Services';
import {IDefaultScreenProps} from '../../Types';
import {ICard} from '../../Types/Cards';
import CardItem from './CardItem';
import SearchBar from './SearchBar';

const Cards = (props: IDefaultScreenProps) => {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useAppDispatch();
  const cardList = useAppSelector(s => s.cards.filteredList);

  const load = async () => {
    setLoading(true);
    const res = await getCards();
    let cards: ICard[] = [];
    Object.keys(res).map(key => cards.push(...res[key]));
    setLoading(false);
    dispatch(updateList(cards));
  };

  React.useEffect(() => {
    load();
  }, []);

  const renderItem = (card: ICard): JSX.Element => (
    <TouchableOpacity
      onPress={() => {
        dispatch(updateSelected(card));
        props.navigation.push('CardDetail');
      }}>
      <CardItem {...card} />
    </TouchableOpacity>
  );

  const renderListHeader = () => (
    <View style={styles.listHeader}>
      <Text>Count: {cardList.length}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar setLoading={val => setLoading(val)} />
      <FlatList
        data={cardList}
        keyExtractor={(_, i) => 'card-' + i}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        refreshing={loading}
        onRefresh={load}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContent: {
    padding: 5,
  },
  listHeader: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  seperator: {
    marginVertical: 5,
  },
});
