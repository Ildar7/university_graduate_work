import { StateSchema } from 'app/providers/StoreProvider';

interface RequestOptions {
    pageSelector: (state: StateSchema) => string | undefined;
    limitSelector: (state: StateSchema) => string | undefined;
    sortFieldSelector: (state: StateSchema) => string | undefined;
    sortOrderSelector: (state: StateSchema) => string | undefined;
}

export function buildRequestUrl(basePath: string, options: RequestOptions, state: StateSchema): string {
    const {
        pageSelector, limitSelector, sortFieldSelector, sortOrderSelector,
    } = options;

    const selectedSortField = sortFieldSelector(state);
    const selectedSortOrderField = sortOrderSelector(state);

    const page = pageSelector(state);
    const limit = limitSelector(state);

    const selectedSort = {
        sort: selectedSortField!,
        order: selectedSortOrderField!,
    };

    const queryParams = new URLSearchParams();

    if (page !== undefined) {
        queryParams.append('page', page.toString());
    }

    if (limit !== undefined) {
        queryParams.append('limit', limit.toString());
    }

    if (selectedSort.sort !== undefined) {
        queryParams.append('sort', selectedSort.sort.toString());
    }

    if (selectedSort.order !== undefined) {
        queryParams.append('order', selectedSort.order.toString());
    }

    return `${basePath}?${queryParams.toString()}`;
}
