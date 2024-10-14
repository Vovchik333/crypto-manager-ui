const ActionType = {
    GET_ALL: 'transaction/get-all',
    FIRST_CREATE: 'transaction/first-create', 
    CREATE: 'transaction/create',
    UPDATE: 'transaction/update',
    DELETE: 'transaction/delete',
    LAST_DELETE: 'transaction/last-delete',
    GET_FROM_ASSET: 'transaction/get-from-asset'
} as const;

export { ActionType };
