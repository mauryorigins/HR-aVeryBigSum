export default function aVeryBigSum(ar: number[]): number {
  let sumaArray:number = 0;
  ar.forEach((element) => {
    sumaArray += element;
  });
  return sumaArray;
}
