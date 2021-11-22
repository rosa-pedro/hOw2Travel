import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {Autocomplete, AutocompleteItem, Icon } from "@ui-kitten/components";
import styles from './styles';
import {busList} from "../../assets/data/transportation";
import CompassIcon from "../Icons/CompassIcon";
import SearchIcon from '../Icons/SearchIcon';
const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const SearchBar = () => {

    const [value, setValue] = useState(null);
    const [data, setData] = useState(busList);

    const onSelect = (index) => {
        setValue(data[index].title);
        console.warn(`Pressed ${data[index].title}`);
    };

    const onChangeText = (query) => {
        setValue(query);
        setData(busList.filter(item => filter(item, query)));
    };

    const clearInput = () => {
        setValue('');
        setData(busList);
    };

    const renderOption = (item, index) => (
        <AutocompleteItem
            key={index}
            title={item.title}
            accessoryLeft={CompassIcon}
        />
    );

    const renderCloseIcon = (props) => (
        <TouchableWithoutFeedback onPress={clearInput}>
            <Icon {...props} name='close'/>
        </TouchableWithoutFeedback>
    );

    return(
        <Autocomplete
            placeholder={'Bus...'}
            value={value}
            onChangeText={onChangeText}
            onSelect={onSelect}
            accessoryLeft={SearchIcon}
            accessoryRight={renderCloseIcon}
            style={styles.container}
            onSubmitEditing={() => console.warn('Pressed')}
        >
            {data.map(renderOption)}
        </Autocomplete>
    );
};

export default SearchBar;
