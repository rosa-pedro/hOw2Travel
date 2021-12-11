import React from 'react';
import { Button} from '@ui-kitten/components';
import styles from './styles';

const QualityTag = ({title}) => {

    const checkStatus = (title) => {

        switch (title.toLowerCase()) {

            case 'excellent':
                return 'success';

            case 'fine':
                return 'success';

            case 'moderate':
                return 'success';

            case 'poor':
                return 'warning';

            case 'very poor':
                return 'warning';

            case 'severe':
                return 'danger';

            case 'very dry':
                return 'danger';

            case 'dry':
                return 'warning';

            case 'good':
                return 'success';

            case 'fairly humid':
                return 'warning';

            case 'highly humid':
                return 'danger';

            case 'freezing':
                return 'danger';

            case 'cold':
                return 'warning';

            case 'chill':
                return 'success';

            case 'warm':
                return 'warning';

            case 'hot':
                return 'danger';
            default: {
                return 'primary';
            }
        }

    };

    return (
        <Button
            appearance={'outline'}
            size={'tiny'}
            status={checkStatus(title)}
            style={styles.container}
        >
            {title}
        </Button>
    );
};

export default QualityTag;
