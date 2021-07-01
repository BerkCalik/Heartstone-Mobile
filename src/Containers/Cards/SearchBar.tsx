import React from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native';
import {useAppDispatch} from '../../Redux/Hooks';
import {debounce} from 'lodash';
import {
  fillFilteredListAll,
  updateFilteredList,
} from '../../Redux/Slices/Cards';
import {searchCard} from '../../Services';

interface IProps {
  setLoading: (val: boolean) => void;
}

const SearchBar = (props: IProps) => {
  const dispatch = useAppDispatch();

  const onChange = async (q: string) => {
    if (q.trim() == '') {
      dispatch(fillFilteredListAll());
    } else {
      props.setLoading(true);
      const res = await searchCard(q);
      if (res == null) {
        Alert.alert('Error', 'Not found.')
      } else {
        dispatch(updateFilteredList(res));
      }      
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
