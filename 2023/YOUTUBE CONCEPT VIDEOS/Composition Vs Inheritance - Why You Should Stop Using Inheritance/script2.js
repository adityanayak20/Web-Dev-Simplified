function walkerAndAttacker({ name }) {
  return {
    walk: () => console.log(`${name} walked`),
    attack: () => console.log(`${name} attacked`)
  }
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  }
}

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  }
}

function Monster(name) {
  const monster = { name: name }
  return {
    ...monster,
    ...walkerAndAttacker(monster)
  }
}

function FlyingMonster(name) {
  const monster = { name: name }
  return {
    ...monster,
    ...walkerAndAttacker(monster),
    ...flyer(monster)
  }
}

function SwimmingMonster(name) {
  const monster = { name: name }
  return {
    ...monster,
    ...walkerAndAttacker(monster),
    ...swimmer(monster)
  }
}

const bear = Monster('bear')
bear.walk()
bear.attack()

const eagle = FlyingMonster('eagle')
eagle.walk()
eagle.attack()
eagle.fly()

const shark = SwimmingMonster('shark')
shark.walk()
shark.attack()
shark.swim()

