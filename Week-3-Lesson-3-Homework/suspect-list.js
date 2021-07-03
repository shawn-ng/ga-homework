const suspects = [
  {
    name: 'James Moriarty',
    height: 170,
    shoeSize: 11,
    bloodType: 'A',
  },
  {
    name: 'Bender Bending Rodriguez',
    height: 170,
    shoeSize: 20,
    bloodType: 'Oil',
  },
  {
    name: 'Jean ValJean',
    height: 167,
    shoeSize: 12,
    bloodType: 'B',
    isTheStrongerManThanJavertByFar: true,
    isFrench: true,
  },
  {
    name: 'Nosferatu',
    height: 179,
    shoeSize: 14,
    bloodType: 'A',
    isUndead: true,
  },
  {
    name: 'Pascal Sauvage',
    height: 178,
    shoeSize: 9,
    bloodType: 'AB',
    isFrench: true,
  },
  {
    name: 'Irene Adler',
    height: 169,
    shoeSize: 7,
    bloodType: 'O',
  },
  {
    name: 'Sherlock Holmes',
    height: 169,
    shoeSize: 10,
    bloodType: 'B',
  },
  {
    name: 'Mickey Briggs',
    height: 176,
    shoeSize: 10,
    bloodType: 'B',
  },
  {
    name: 'Assane Diop',
    height: 183,
    shoeSize: 14,
    bloodType: 'A',
  },
  {
    name: 'Arsene Lupin',
    height: 177,
    shoeSize: 12,
    bloodType: 'A',
  },
  {
    name: 'Elizabeth Windsor',
    height: 153,
    shoeSize: 11,
    bloodType: 'A',
  },
]

// Someone's stolen the crown jewels and you're going to solve the case with JavaScript.

// Known facts:
//  the suspect seems to have cut their hand when breaking open the glass case, and type A blood was found
//  the suspect got away through a narrow window, forensics say that their height can be no more than 180cm tall
//  the suspect was able to reach the window apparently unaided so must be at least 155cm in height
//  a size 12 shoe print was left at the scene

// Use filter to narrow down the list of suspects.

const shortlist = suspects.filter((suspect) => {
  return (
    suspect.height >= 155 && suspect.height <= 180 && suspect.bloodType === 'A' && suspect.shoeSize === 12
  )
})



console.log(shortlist)
