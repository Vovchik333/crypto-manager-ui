const ActionType = {
    GET_ALL: 'asset/get-all',
    ADD: 'asset/add',
    DELETE: 'asset/delete',
    ADD_TRANSACTION: 'asset/add-transaction',
    REMOVE_TRANSACTION: 'asset/delete-transaction'
} as const;

export { ActionType };
