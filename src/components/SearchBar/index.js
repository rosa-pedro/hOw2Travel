import React, {useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {Autocomplete, AutocompleteItem, Button, Icon} from "@ui-kitten/components";
import styles from './styles';
import transportation from "../../assets/data/transportation";
import CompassIcon from "../CompassIcon";
import SearchIcon from '../SearchIcon';

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const SearchBar = () => {

    const [value, setValue] = useState(null);
    const [data, setData] = useState(transportation);

    const onSelect = (index) => {
        setValue(transportation[index].title);
        console.warn(`Pressed ${transportation[index].title}`);
    };

    const onChangeText = (query) => {
        setValue(query);
        setData(transportation.filter(item => filter(item, query)));
    };

    const clearInput = () => {
        setValue('');
        setData(transportation);
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
            placeholder={'Transportation...'}
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
