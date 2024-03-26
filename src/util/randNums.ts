export default function randNums(num: number) {
  // Generate 3 random different numbers
  const numList: number[] = [];

  while (numList.length != 3) {
    const random = Math.floor(Math.random() * (num));
    if (!numList.includes(random)) {
      numList.push(random);
    }
  }

  return numList;
}
