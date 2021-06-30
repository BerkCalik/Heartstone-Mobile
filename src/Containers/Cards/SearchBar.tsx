import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../Redux/Hooks';
import {debounce} from 'lodash';
import {updateFilteredList, updateList} from '../../Redux/Slices/Cards';
import {searchCard} from '../../Services';

interface IProps {
  setLoading: (val: boolean) => void;
}

const SearchBar = (props: IProps) => {
  const dispatch = useAppDispatch();
  const allCards = useAppSelector(s => s.cards.list);

  const onChange = async (q: string) => {
    if (q.trim() == '') {
      dispatch(updateList(allCards));
    } else {
      props.setLoading(true);
      const res = await searchCard(q);
      console.log('search', res);
      dispatch(updateFilteredList(res));
      props.setLoading(false);
    }
  };
  const handler = React.useCallback(debounce(onChange, 500), []);

  return (
    <View>
      <TextInput
        onChangeText={handler}
        style={styles.input}
        placeholder="🔍 Search"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
});
