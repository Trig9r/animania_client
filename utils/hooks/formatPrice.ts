export const formatPrice = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
