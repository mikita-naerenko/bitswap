

export const calcOffset = (page) => (Number(page) - 1) * 10;

export const calcCountOfPage = (countForPagination) => Math.ceil(countForPagination / 10)