import React from 'react';
import { Button} from '@ui-kitten/components';
import styles from './styles';

const QualityTag = ({title}) => {

    return (
        <Button
            appearance={'outline'}
            size={'tiny'}
            style={styles.container}
        >
            {title}
        </Button>
    );
};

export default QualityTag;
