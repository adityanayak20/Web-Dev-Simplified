const riolu_moves = [
                     'force palm', 
                     'vaccum wave',
                     'shadow clone',
                     'reversal'
                    ]

const lucario = {
  hp: "100",
  type : ["fighting", "steel"],
  moves: [
          ...riolu_moves,
          "aura sphere",
          "steal beam",
          "focus punch",
          "extreme speed",
          "bone rush",
          "close combat",
          "bullet punch",
          "dragon rush"
         ],
  trainer_name: "unknown",
  region_found: "sinnoh"
}                    

const details = {
  trainer_name: "Ash",
  region_found: "kanto"
}
const trainer1 = {...lucario, ...details, rank: 2}
console.log(trainer1)


