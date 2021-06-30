import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface IDefaultScreenProps {
  route: {
    params: any;
  };
  navigation: NativeStackNavigationProp<any, any>;
}
