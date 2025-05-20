import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { StudentSectionsData, StudentSectionsError } from 'entities/StudentSections';
import { getTableSortField, getTableSortOrderField } from 'features/TableSort';
import { getEnrollmentTypesLimit, getEnrollmentTypesPage } from 'entities/EnrollmentTypes';
import { buildRequestUrl } from 'shared/lib/helpers/buildRequestUrl/buildRequestUrl';
import {
    getStudentSectionsPage,
} from '../../selectors/getStudentSectionsPage/getStudentSectionsPage';
import {
    getStudentSectionsLimit,
} from '../../selectors/getStudentSectionsLimit/getStudentSectionsLimit';

export const fetchStudentSections = createAsyncThunk<StudentSectionsData, void, ThunkConfig<StudentSectionsError>>(
    'students/fetchStudentSections',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const requestOptions = {
            pageSelector: getStudentSectionsPage,
            limitSelector: getStudentSectionsLimit,
            sortFieldSelector: getTableSortField,
            sortOrderSelector: getTableSortOrderField,
        };

        const requestUrl = buildRequestUrl('/college/student-sections', requestOptions, getState() as StateSchema);

        try {
            const response = await extra.api.get<StudentSectionsData>(requestUrl);

            return response.data;
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                return rejectWithValue({
                    status: 500,
                    error: 'timeout',
                });
            }

            return rejectWithValue({
                status: err.response.status,
                error: err.response.data.message,
            });
        }
    },
);
