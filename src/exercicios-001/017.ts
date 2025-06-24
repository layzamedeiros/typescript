function exempl(ex: string | string[]): number {
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

console.log(exempl("Layza"));            
console.log(exempl(["Layza", "Medeiros"]));