import { StateSchema } from 'app/providers/StoreProvider';

export const getClassRoomsData = (state: StateSchema) => state.classRooms?.data;
export const getClassRoomsIsLoading = (state: StateSchema) => state.classRooms?.isLoading;
export const getClassRoomsError = (state: StateSchema) => state.classRooms?.error;
