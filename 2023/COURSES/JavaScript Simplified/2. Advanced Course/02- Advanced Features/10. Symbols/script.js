// import { person } from "./module.js";

// const sym = Symbol.for("name")

// // console.log(person)
// // console.log(Object.getOwnPropertySymbols(person))
// console.log(person[sym])


const LOG_LEVEL = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARNING: Symbol("warning"),
  ERROR: Symbol("error")
}

const loglevel = LOG_LEVEL.DEBUG

if(loglevel === LOG_LEVEL.DEBUG) {
  console.log(loglevel)
}