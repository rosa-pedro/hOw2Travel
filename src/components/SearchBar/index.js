import React, {useEffect, useState} from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {Autocomplete, AutocompleteItem, Icon } from "@ui-kitten/components";
import styles from './styles';
import {transportation} from "../../assets/data/transportation";
import CompassIcon from "../Icons/CompassIcon";
import SearchIcon from '../Icons/SearchIcon';
import useLines from "../../hooks/useLines";
import BusIcon from "../Icons/BusIcon";

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase());

const SearchBar = ({navigation}) => {

    const [value, setValue] = useState(null);
    const [list, setList] = useState([]);
    const [normalizedData, setNormalizedData] = useState([])

    const {data, isSuccess} = useLines();

    useEffect(() => {

        if(isSuccess) {

            const newList = data.map(item => normalizeData(item));

            setList(newList);
            setNormalizedData(newList);
        }

    }, [isSuccess])

    const checkType = (item) => {
        switch (item.type_id) {
            case 1:
                return 'Bus';
            default:
                return 'unknown';
        };
    };

    const normalizeData = (item) => {

        const newItem = {
            id: item.line_id,
            title: `${checkType(item)} Nr. ${item.number}`,
            description: `${item.initial_stop} - ${item.final_stop}`,
            type: checkType(item),
        }

        return newItem;
    };

    const onSelect = (index) => {

        setValue(list[index].title);
        const transport = data.find(item => list[index].id === item.line_id);

        navigation && navigation.navigate('Transportation', {
            id: transport.line_id,
            type: checkType(transport),
            number: transport.number,
            initialStop: transport.initial_stop,
            finalStop: transport.final_stop
        });

        clearInput()
    };

    const onChangeText = (query) => {
        setValue(query);
        setList(normalizedData.filter(item => filter(item, query)));

    };

    const clearInput = () => {
        setValue('');
        setList(normalizedData);
    };

    const renderAutocompleteItemLeftIcon = (item) => {
        switch (item.type) {
            case 'Bus':
                return <BusIcon />;
            default:
                return < CompassIcon />;
        };
    };

    const renderOption = (item, index) => (
        <AutocompleteItem
            key={index}
            title={item.title}
            description={item.description}
            accessoryLeft={renderAutocompleteItemLeftIcon(item)}
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
        >
            {list.map(renderOption)}
        </Autocomplete>
    );
};

export default SearchBar;
