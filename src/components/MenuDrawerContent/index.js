import React from 'react';
import {Drawer, DrawerItem, IndexPath} from "@ui-kitten/components";

const MenuDrawerContent = ({navigation, state}) => {

    return (
        <Drawer
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => {navigation.navigate(state.routeNames[index.row])}}
        >
            <DrawerItem title={'Home'} />
            <DrawerItem title={'Details'} />
        </Drawer>
    );
};

export default MenuDrawerContent;
