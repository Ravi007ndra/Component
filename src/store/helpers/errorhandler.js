export const errorHandler = {
    catchErrors
};

function catchErrors(errorsBlock) {
    if (errorsBlock.errors) {
        return Object.values(errorsBlock.errors).flat();
    } else if (errorsBlock.message) {
        return [errorsBlock.message];
    } else {
        return [];
    }
}
