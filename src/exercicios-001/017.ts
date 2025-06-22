function exemplo(ex: string | string[]): number {
  if (typeof ex === "string") {
    return (<string>ex).length;
  } else {
    let total = 0;
    for (let str of (<string[]>ex)) {
      total += str.length;
    }
    return total;
  }
}

console.log(exemplo("Layza"));            
console.log(exemplo(["Layza", "Medeiros"]));