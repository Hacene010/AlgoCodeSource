function conversion(degCel) {
  if (typeof degCel === 'number') {
    return `${degCel}°C est égal à  ${degCel * (9 / 5) + 35}°F`;
  } else {
    return 'Données en entrée non correctes.';
  }
}

console.log(conversion(50));
