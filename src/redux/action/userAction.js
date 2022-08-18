import axios from 'axios';

export const onUpdateLocation = (location) => ({
        type:'ON_UPDATE_LOCATION',
        payload:location
})