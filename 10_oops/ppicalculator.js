ss = 6;
pixelA = 1920
pixelB = 1440

device = "mobile"

ppi = (Math.sqrt((pixelA*pixelA) + (pixelB*pixelB)))/ss
ppi = ppi.toFixed(2)

console.log(`your ${device}'s ppi is: ${ppi}`)