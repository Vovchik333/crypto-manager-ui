const ActionType = {
    GET_ALL: 'portfolio/get-all',
    GET_ONE: 'portfolio/get-one',
    CREATE: 'portfolio/create',
    UPDATE: 'portfolio/update',
    DELETE: 'portfolio/delete',
    DELETE_ASSET: 'portfolio/delete-asset'
} as const;

export { ActionType };
