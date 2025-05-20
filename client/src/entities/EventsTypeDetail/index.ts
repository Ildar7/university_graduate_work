export {
    getEventsTypeDetailError,
} from './model/selectors/getEventsTypeDetailError/getEventsTypeDetailError';
export {
    getEventsTypeDetailIsLoading,
} from './model/selectors/getEventsTypeDetailIsLoading/getEventsTypeDetailIsLoading';
export {
    getEventsTypeDetailData,
} from './model/selectors/getEventsTypeDetailData/getEventsTypeDetailData';
export {
    fetchEventsTypeDetail,
} from './model/services/fetchEventsTypeDetail/fetchEventsTypeDetail';

export { eventsTypeDetailActions, eventsTypeDetailReducer } from './model/slice/eventsTypeDetailSlice';

export { EventsTypeDetailSchema, EventsTypeDetailType } from './model/types/eventsTypeDetail';
